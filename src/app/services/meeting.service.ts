import { Injectable, inject } from '@angular/core';
import { Firestore, collection, addDoc, getDocs } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class MeetingService {
  private firestore = inject(Firestore); // ✅ Correct usage

  async saveSummary(summary: string) {
    const generatedTitle = this.generateTitleFromSummary(summary);
    const meeting = {
      title: generatedTitle,
      summary,
      createdAt: new Date()
    };
    const ref = collection(this.firestore, 'meetings');
    return addDoc(ref, meeting);
  }

  async fetchPastSummaries() {
    const ref = collection(this.firestore, 'meetings');
    const snapshot = await getDocs(ref); // ✅ Safe now
    return snapshot.docs.map(doc => doc.data());
  }

  private generateTitleFromSummary(summary: string): string {
    const firstSentence = summary.split(/[.?!]/)[0].trim();
    const title = firstSentence || summary.split(/\s+/).slice(0, 8).join(' ');
    return title.length > 50 ? title.substring(0, 50) + '...' : title;
  }
}
