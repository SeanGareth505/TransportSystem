import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TrackingMapComponent } from './pages/tracking-map/tracking-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    TrackingMapComponent,
    GoogleMapsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: []
})
export class AppModule { }