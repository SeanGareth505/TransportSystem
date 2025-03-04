/// <reference types="google.maps" />

import { Component, EventEmitter, Output, ViewChild, ElementRef, AfterViewInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'add-client-modal',
  templateUrl: './add-client-modal.component.html',
  styleUrls: ['./add-client-modal.component.scss'],
  standalone: true,
  imports: [DialogModule, InputTextModule, DropdownModule, ButtonModule, ReactiveFormsModule, CommonModule]
})
export class AddClientModalComponent implements AfterViewInit {
  @Output() clientAdded = new EventEmitter<any>();
  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter();

  @ViewChild('locationInput', { static: false }) locationInput!: ElementRef;

  clientForm: FormGroup;
  autocomplete!: google.maps.places.Autocomplete;

  constructor(private fb: FormBuilder, private ngZone: NgZone) {
    this.clientForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      location: ['', Validators.required],
      idNumber: ['', Validators.required],
      city: [''],
      suburb: [''],
      country: [''],
      latitude: [''],
      longitude: ['']
    });
  }

  ngAfterViewInit() {
    this.initAutocomplete();
  }

  initAutocomplete() {
    if (!this.locationInput || !this.locationInput.nativeElement) {
      console.error("❌ Location input element is missing or not initialized.");
      return;
    }

    if (!window.google || !window.google.maps || !window.google.maps.places) {
      console.error("❌ Google Maps API is not loaded.");
      return;
    }

    console.log("✅ Initializing Google Places Autocomplete...");

    // ✅ Initialize Google Places Autocomplete
    this.autocomplete = new google.maps.places.Autocomplete(this.locationInput.nativeElement);

    // ✅ Ensure dropdown stays on top of modal
    setTimeout(() => {
      const pacContainer = document.querySelector(".pac-container");
      if (pacContainer) {
        pacContainer.setAttribute("style", "z-index: 100000 !important; position: absolute;");
        document.body.appendChild(pacContainer);
      }
    }, 500);

    // ✅ Listen for place selection (works for both Enter key & Click)
    this.autocomplete.addListener("place_changed", () => {
      this.ngZone.run(() => {
        this.processPlace(this.autocomplete.getPlace());
      });
    });
  }

  private processPlace(place: google.maps.places.PlaceResult | null) {
    if (!place || !place.geometry || !place.address_components) {
      console.error("❌ Still unable to retrieve a valid place:", place);
      return;
    }

    this.fillInAddress(place);
  }

  fillInAddress(place: google.maps.places.PlaceResult) {
    let city = "";
    let suburb = "";
    let country = "";
    let formattedAddress = place.formatted_address || '';
    let latitude = place.geometry?.location?.lat() || '';
    let longitude = place.geometry?.location?.lng() || '';

    if (!place.address_components) {
      return;
    }

    for (const component of place.address_components) {
      const addressType = component.types[0];
      switch (addressType) {
        case 'locality':
          city = component.long_name;
          break;
        case 'sublocality_level_1':
        case 'sublocality':
          suburb = component.long_name;
          break;
        case 'country':
          country = component.long_name;
          break;
      }
    }

    this.clientForm.patchValue({
      location: formattedAddress,
      city: city || '',
      suburb: suburb || '',
      country: country || '',
      latitude: latitude,
      longitude: longitude
    });
  }

  onSubmit() {
    if (this.clientForm.valid) {
      this.clientAdded.emit(this.clientForm.value);
      this.closeDialog.emit();
    }
  }
  
  onCancel() {
    this.closeDialog.emit();
  }
}
