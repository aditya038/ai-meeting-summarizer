import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from './environments/firebase';
import { RecordMeetingComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { HttpClientModule } from '@angular/common/http'; // ✅ ADD THIS

bootstrapApplication(RecordMeetingComponent, {
  ...appConfig,
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    importProvidersFrom(HttpClientModule), // ✅ ADD THIS LINE
    ...(appConfig.providers || [])
  ]
}).catch(err => console.error(err));
