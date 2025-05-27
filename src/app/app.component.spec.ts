import { TestBed } from '@angular/core/testing';
import { RecordMeetingComponent } from './app.component';

describe('RecordMeetingComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordMeetingComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RecordMeetingComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'meeting-summarizerr' title`, () => {
    const fixture = TestBed.createComponent(RecordMeetingComponent);
    const app: RecordMeetingComponent = fixture.componentInstance;
    expect(app.title).toEqual('meeting-summarizerr');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(RecordMeetingComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, meeting-summarizerr');
  });
});
