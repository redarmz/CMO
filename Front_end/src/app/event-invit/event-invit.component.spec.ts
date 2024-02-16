import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { EventInvitComponent } from './event-invit.component';

describe('EventInvitComponent', () => {
  let component: EventInvitComponent;
  let fixture: ComponentFixture<EventInvitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventInvitComponent],
      imports: [HttpClientModule]

    });
    fixture = TestBed.createComponent(EventInvitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
