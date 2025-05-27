import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-past-summaries',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './past-summaries.component.html',
  styleUrls: ['./past-summaries.component.scss']
})
export class PastSummariesComponent {
  @Input() summaries: string[] = [];
}
