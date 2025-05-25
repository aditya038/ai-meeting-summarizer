import { bootstrapApplication } from '@angular/platform-browser';
import { RecordMeetingComponent } from './app/app.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(RecordMeetingComponent, config);

export default bootstrap;
