import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../../service/firebase.service';

@Component({
  selector: 'app-track-confonfirmation',
  templateUrl: './track-confonfirmation.component.html',
  styleUrls: ['./track-confonfirmation.component.scss']
})
export class TrackConfonfirmationComponent implements OnInit {
  userId: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private firebaseService: FirebaseService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      // this.userId = '12';
    });
  }

  startTracking() {
    if (!this.userId) {
      console.error('User ID is missing!');
      return;
    }

    this.firebaseService.confirmTracking(this.userId);
    
    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          this.firebaseService.updateLocation(this.userId, latitude, longitude);
        },
        (error) => console.error('Location error:', error),
        { enableHighAccuracy: true, maximumAge: 0 }
      );
    }

    this.router.navigate(['pages/thank-you']);
  }
}
