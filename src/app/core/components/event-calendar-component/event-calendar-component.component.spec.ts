import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCalendarComponentComponent } from './event-calendar-component.component';

describe('EventCalendarComponentComponent', () => {
  let component: EventCalendarComponentComponent;
  let fixture: ComponentFixture<EventCalendarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCalendarComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCalendarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
