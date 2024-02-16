import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TirelireComponent } from './tirelire.component';
import { TirelireService } from '../tirelire.service';
import { of } from 'rxjs';

describe('TirelireComponent', () => {
  let component: TirelireComponent;
  let fixture: ComponentFixture<TirelireComponent>;
  let tirelireService: TirelireService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TirelireComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule],
      providers: [TirelireService] // Ajouter le service au fournisseur
    });
    fixture = TestBed.createComponent(TirelireComponent);
    component = fixture.componentInstance;
    tirelireService = TestBed.inject(TirelireService); // Injecter le service
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call createTransaction method of tirelireService when all fields are filled', fakeAsync(() => {
    spyOn(tirelireService, 'createTransaction').and.returnValue(of({}));

    component.tirelireData.numeroEvent = 123;
    component.tirelireData.emprunteur = 'John';
    component.tirelireData.preteur = 'Jane';
    component.tirelireData.amount = 50;

    component.createTransaction();

    tick(); // Attendre que les observables se résolvent
    expect(tirelireService.createTransaction).toHaveBeenCalled();
  }));

  it('should not call createTransaction method of tirelireService when some fields are missing', fakeAsync(() => {
    spyOn(tirelireService, 'createTransaction').and.returnValue(of({}));

    component.createTransaction();

    tick(); // Attendre que les observables se résolvent
    expect(tirelireService.createTransaction).not.toHaveBeenCalled();
  }));

  it('should call searchTransactions method of tirelireService when searchPersonInput1 and searchPersonInput2 are filled', fakeAsync(() => {
    spyOn(tirelireService, 'searchTransactionsByPersons').and.returnValue(of([]));

    component.searchPersonInput1 = 'John';
    component.searchPersonInput2 = 'Jane';

    component.searchTransactions();

    tick(); // Attendre que les observables se résolvent
    expect(tirelireService.searchTransactionsByPersons).toHaveBeenCalled();
  }));

  it('should call searchTransactions method of tirelireService when only searchPersonInput1 is filled', fakeAsync(() => {
    spyOn(tirelireService, 'searchTransactions').and.returnValue(of([]));

    component.searchPersonInput1 = 'John';

    component.searchTransactions();

    tick(); // Attendre que les observables se résolvent
    expect(tirelireService.searchTransactions).toHaveBeenCalled();
  }));

  it('should not call searchTransactions method of tirelireService when searchPersonInput1 and searchPersonInput2 are empty', fakeAsync(() => {
    spyOn(tirelireService, 'searchTransactions').and.returnValue(of([]));

    component.searchTransactions();

    tick(); // Attendre que les observables se résolvent
    expect(tirelireService.searchTransactions).not.toHaveBeenCalled();
  }));
});
