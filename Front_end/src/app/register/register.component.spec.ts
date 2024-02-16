import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register.component';
import { Logreg } from '../Logreg.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let logregService: Logreg;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [ReactiveFormsModule, HttpClientModule],
      providers: [Logreg, { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    logregService = TestBed.inject(Logreg);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize registerForm with required fields', () => {
    expect(component.registerForm).toBeDefined();
    expect(component.registerForm.get('username')).toBeDefined();
    expect(component.registerForm.get('password')).toBeDefined();
    expect(component.registerForm.get('confirmPassword')).toBeDefined();
  });

  it('should display error message if passwords do not match', () => {
    component.registerForm.setValue({ username: 'user', password: 'password', confirmPassword: 'different' });
    spyOn(window, 'alert');
    component.onSubmit();
    expect(window.alert).toHaveBeenCalledWith('Les mots de passe ne correspondent pas.');
  });


  it('should handle error during registration', fakeAsync(() => {
    spyOn(logregService, 'registerUser').and.returnValue(throwError('Registration Error'));
    spyOn(console, 'error');
    spyOn(window, 'alert');

    component.registerForm.setValue({ username: 'user', password: 'password', confirmPassword: 'password' });
    component.onSubmit();
    tick();

    expect(console.error).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Erreur dans l inscription, veuillez réesayer');
  }));


});
