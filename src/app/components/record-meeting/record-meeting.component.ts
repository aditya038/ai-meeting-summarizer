import { Component } from '@angular/core';
import { AudioRecorderService } from '../../services/audio-recorder.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-record-meeting',
  templateUrl: './record-meeting.component.html',
  styleUrls: ['./record-meeting.component.scss'],
  imports: [CommonModule, MatCardModule]
})
export class RecordMeetingComponent {
  recording = false;
  audioURL: string | null = null;
  summary: string | null = null;

  constructor(private recorder: AudioRecorderService, private http: HttpClient) {}

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
        next: res => this.summary = res.summary,
        error: err => console.error('Upload error:', err)
      });
  }
}
