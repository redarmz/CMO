import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveRestoComponent } from './reserve-resto.component';

describe('ReserveRestoComponent', () => {
  let component: ReserveRestoComponent;
  let fixture: ComponentFixture<ReserveRestoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReserveRestoComponent]
    });
    fixture = TestBed.createComponent(ReserveRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
