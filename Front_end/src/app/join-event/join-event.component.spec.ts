
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

import { JoinEventComponent } from './join-event.component';

describe('JoinEventComponent', () => {
  let component: JoinEventComponent;
  let fixture: ComponentFixture<JoinEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoinEventComponent],
      imports: [HttpClientModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ numeroEvent: 'your_event_id_here' })
            }
          }
        }
      ]
    });

    fixture = TestBed.createComponent(JoinEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
