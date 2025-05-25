import { Component } from '@angular/core';
import { AudioRecorderService } from './services/audio-recorder.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MeetingService } from './services/meeting.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';




@Component({
  selector: 'app-record-meeting',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, MatCardModule, HttpClientModule, MatTabsModule, MatButtonModule],
  standalone: true
})
export class RecordMeetingComponent {
  recording = false;
  audioURL: string | null = null;
  summary: string | null = null;

  constructor(
    private recorder: AudioRecorderService,
    private http: HttpClient,
    private meetingService: MeetingService
  ) {}

  async start() {
    await this.recorder.startRecording();
    this.recording = true;
  }

  async stop() {
    const audio = await this.recorder.stopRecording();
    this.recording = false;

    // Save for playback
    this.audioURL = URL.createObjectURL(audio);

    // Upload to backend
    const formData = new FormData();
    formData.append('audio', audio, 'meeting.webm');

    this.http.post<{ summary: string }>('http://localhost:8000/upload-audio/', formData)
      .subscribe({
        next: async res => {
          this.summary = res.summary;
          await this.meetingService.saveSummary(res.summary);
        },
        error: err => console.error('Upload error:', err)
      });
  }
}
