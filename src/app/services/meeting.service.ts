import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class MeetingService {
  constructor(private firestore: Firestore) {}

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

  private generateTitleFromSummary(summary: string): string {
    // Use the first sentence or first 8 words if no punctuation found
    const firstSentence = summary.split(/[.?!]/)[0].trim();
    const title = firstSentence || summary.split(/\s+/).slice(0, 8).join(' ');
    return title.length > 50 ? title.substring(0, 50) + '...' : title;
  }
}
