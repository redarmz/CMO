import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatEventComponent } from './creat-event.component';

describe('CreatEventComponent', () => {
  let component: CreatEventComponent;
  let fixture: ComponentFixture<CreatEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatEventComponent]
    });
    fixture = TestBed.createComponent(CreatEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
