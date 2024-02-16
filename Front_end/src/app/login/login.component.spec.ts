import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { Logreg } from '../Logreg.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockLogregService: jasmine.SpyObj<Logreg>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(waitForAsync(() => {
    mockLogregService = jasmine.createSpyObj('Logreg', ['loginUser']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [
        { provide: Logreg, useValue: mockLogregService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the login form', () => {
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.controls['username']).toBeDefined();
    expect(component.loginForm.controls['password']).toBeDefined();
  });

  it('should require username and password', () => {
    const form = component.loginForm;
    const usernameControl = form.controls['username'];
    const passwordControl = form.controls['password'];

    usernameControl.setValue('');
    passwordControl.setValue('');

    expect(form.valid).toBeFalsy();
    expect(usernameControl.errors?.['required']).toBeTruthy();
    expect(passwordControl.errors?.['required']).toBeTruthy();
  });

  it('should call loginUser method on form submission', fakeAsync(() => {
    const username = 'testuser';
    const password = 'testpassword';

    component.loginForm.setValue({
      username: username,
      password: password
    });

    mockLogregService.loginUser.and.returnValue(of({})); // Simuler une réponse réussie

    component.onSubmit();
    tick(); // Attendre que les observables se résolvent

    expect(mockLogregService.loginUser).toHaveBeenCalledWith({ username, password });
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/home']);
  }));


});
