import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from './environments/firebase';
import { RecordMeetingComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideHttpClient, withFetch } from '@angular/common/http';

bootstrapApplication(RecordMeetingComponent, {
  ...appConfig,
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideHttpClient(withFetch()), // ✅ CORRECT WAY to enable fetch
    ...(appConfig.providers || [])
  ]
}).catch(err => console.error(err));
