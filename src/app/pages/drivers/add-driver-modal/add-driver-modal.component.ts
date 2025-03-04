import { Component, EventEmitter, Output, ViewChild, ElementRef, AfterViewInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'add-driver-modal',
    templateUrl: './add-driver-modal.component.html',
    styleUrls: ['./add-driver-modal.component.scss'],
    standalone: true,
    imports: [DialogModule, InputTextModule, DropdownModule, ButtonModule, ReactiveFormsModule, CommonModule]
})
export class AddDriverModalComponent implements AfterViewInit {
    @Output() driverAdded = new EventEmitter<any>();
    @ViewChild('locationInput', { static: false }) locationInput!: ElementRef;
    display: boolean = false;
    driverForm: FormGroup;
    autocomplete!: google.maps.places.Autocomplete;
    @Output() closeDialog: EventEmitter<boolean> = new EventEmitter();

    constructor(private fb: FormBuilder, private ngZone: NgZone) {
        this.driverForm = this.fb.group({
            name: ['', Validators.required],
            phone: ['', Validators.required],
            baseLocation: ['', Validators.required],
            idNumber: ['', Validators.required]
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
        let formattedAddress = place.formatted_address || '';
        let latitude = place.geometry?.location?.lat() || '';
        let longitude = place.geometry?.location?.lng() || '';

        this.driverForm.patchValue({
            baseLocation: formattedAddress,
            latitude: latitude,
            longitude: longitude
        });
    }

    onSubmit() {
        if (this.driverForm.valid) {
            this.driverAdded.emit(this.driverForm.value);
            this.closeDialog.emit();
            this.display = false;
        }
    }

    onCancel() {
        this.closeDialog.emit();
    }
}
