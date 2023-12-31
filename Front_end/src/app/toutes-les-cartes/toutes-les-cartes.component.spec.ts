import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToutesLesCartesComponent } from './toutes-les-cartes.component';

describe('ToutesLesCartesComponent', () => {
  let component: ToutesLesCartesComponent;
  let fixture: ComponentFixture<ToutesLesCartesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToutesLesCartesComponent]
    });
    fixture = TestBed.createComponent(ToutesLesCartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
