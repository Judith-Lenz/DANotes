import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"danotes-f34bc","appId":"1:1086662079837:web:6b2f227345749ff38464b4","storageBucket":"danotes-f34bc.firebasestorage.app","apiKey":"AIzaSyCZ2iiGuHEskF3KlEYwv2kyhGkY9UYuy_s","authDomain":"danotes-f34bc.firebaseapp.com","messagingSenderId":"1086662079837"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
