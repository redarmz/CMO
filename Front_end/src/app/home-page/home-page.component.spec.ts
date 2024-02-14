import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';


describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      imports: [HttpClientModule,RouterTestingModule]

    });
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should redirect to event page', () => {
    spyOn(component['router'], 'navigate');

    component.redirectToEventPage();

    expect(component['router'].navigate).toHaveBeenCalledWith(['/event-invit']);
  });

  it('should redirect to tirelire page', () => {
    spyOn(component['router'], 'navigate');

    component.redirectToTirelirePage();

    expect(component['router'].navigate).toHaveBeenCalledWith(['/tirelire']);
  });

  it('should redirect to reservation page', () => {
    spyOn(component['router'], 'navigate');

    component.redirectToReservation();

    expect(component['router'].navigate).toHaveBeenCalledWith(['/reserve-resto']);
  });

  it('should redirect to carte page', () => {
    spyOn(component['router'], 'navigate');

    component.redirectToCartePage();

    expect(component['router'].navigate).toHaveBeenCalledWith(['/carte']);
  });

  it('should redirect to map page', () => {
    spyOn(component['router'], 'navigate');

    component.redirectToMap();

    expect(component['router'].navigate).toHaveBeenCalledWith(['/map']);
  });

  it('should redirect to toutes les cartes page', () => {
    spyOn(component['router'], 'navigate');

    component.redirectToToutesLesCartes();

    expect(component['router'].navigate).toHaveBeenCalledWith(['/Cartes']);
  });

  it('should redirect to login page', () => {
    spyOn(component['router'], 'navigate');

    component.redirectToLogin();

    expect(component['router'].navigate).toHaveBeenCalledWith(['/login']);
  });





});


