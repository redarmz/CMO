import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonDiscussionComponent } from './salon-discussion.component';

describe('SalonDiscussionComponent', () => {
  let component: SalonDiscussionComponent;
  let fixture: ComponentFixture<SalonDiscussionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalonDiscussionComponent]
    });
    fixture = TestBed.createComponent(SalonDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
