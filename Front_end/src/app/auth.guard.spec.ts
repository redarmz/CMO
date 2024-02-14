
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { Logreg } from './Logreg.service';
import { BehaviorSubject } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let router: Router;
  let logregService: Logreg;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      providers: [AuthGuard, Logreg]
    });
    guard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);
    logregService = TestBed.inject(Logreg);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });


});
