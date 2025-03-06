import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { Crud } from './crud/crud';
import { Empty } from './empty/empty';
import { ClientsComponent } from './clients/clients.component';
import { DriversComponent } from './drivers/drivers.component';
import { TrackConfonfirmationComponent } from './track-confonfirmation/track-confonfirmation.component';
import { ThankYouTrackerComponent } from './thank-you-tracker/thank-you-tracker.component';
import { TrackingMapComponent } from './tracking-map/tracking-map.component';

export default [
    { path: 'documentation', component: Documentation },
    { path: 'crud', component: Crud },
    { path: 'empty', component: Empty },
    { path: 'track', component: TrackConfonfirmationComponent },
    { path: 'thank-you', component: ThankYouTrackerComponent },
    { path: 'map', component: TrackingMapComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'drivers', component: DriversComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
