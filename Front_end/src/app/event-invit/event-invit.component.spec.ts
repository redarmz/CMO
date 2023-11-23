import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventInvitComponent } from './event-invit.component';

describe('EventInvitComponent', () => {
  let component: EventInvitComponent;
  let fixture: ComponentFixture<EventInvitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventInvitComponent]
    });
    fixture = TestBed.createComponent(EventInvitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
