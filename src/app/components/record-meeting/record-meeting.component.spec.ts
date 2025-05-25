import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordMeetingComponent } from './record-meeting.component';

describe('RecordMeetingComponent', () => {
  let component: RecordMeetingComponent;
  let fixture: ComponentFixture<RecordMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordMeetingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
