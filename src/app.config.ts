import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';

// ✅ Firebase Imports
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';

// ✅ Service Worker
import { provideServiceWorker } from '@angular/service-worker';

import { environment } from './environments/environment';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        // ✅ Router Setup
        provideRouter(
            appRoutes,
            withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
            withEnabledBlockingInitialNavigation()
        ),

        // ✅ HTTP Client
        provideHttpClient(withFetch()),

        // ✅ Animations
        provideAnimationsAsync(),

        // ✅ PrimeNG with Aura Theme
        providePrimeNG({ theme: { preset: Aura, options: { darkModeSelector: '.app-dark' } } }),

        // ✅ Firebase Configuration (Fixed for Standalone)
        provideFirebaseApp(() => {
            console.log("🔥 Initializing Firebase...");
            return initializeApp(environment.firebase);
        }),
        provideAuth(() => {
            console.log("🔑 Firebase Auth Initialized");
            return getAuth();
        }),
        provideDatabase(() => {
            console.log("📡 Firebase Database Initialized");
            return getDatabase();
        }),

        // ✅ Service Worker Setup (Enabled in Production Only)
        provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000' // Registers after 30s of stability
        })
    ]
};
