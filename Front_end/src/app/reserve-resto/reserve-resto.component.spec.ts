import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ReserveRestoComponent } from './reserve-resto.component';

describe('ReserveRestoComponent', () => {
  let component: ReserveRestoComponent;
  let fixture: ComponentFixture<ReserveRestoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReserveRestoComponent],
      imports: [HttpClientModule]
    });
    fixture = TestBed.createComponent(ReserveRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
