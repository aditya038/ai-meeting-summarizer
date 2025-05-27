import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastSummariesComponent } from './past-summaries.component';

describe('PastSummariesComponent', () => {
  let component: PastSummariesComponent;
  let fixture: ComponentFixture<PastSummariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastSummariesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastSummariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
