import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { InvitationPageComponent } from './invitation-page.component';

describe('InvitationPageComponent', () => {
  let component: InvitationPageComponent;
  let fixture: ComponentFixture<InvitationPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [InvitationPageComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            // Simulez ActivatedRoute avec un paramMap vide par défaut
            snapshot: {
              paramMap: convertToParamMap({})
            }
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    // Déplacez la substitution du fournisseur ici, avant de créer le composant
    const eventCode = 0;
    TestBed.overrideProvider(ActivatedRoute, {
      useValue: {
        snapshot: {
          paramMap: convertToParamMap({ eventCode: eventCode.toString() })
        }
      }
    });

    fixture = TestBed.createComponent(InvitationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set eventCode to the value provided in the URL', () => {
    const eventCode = 0;
    expect(component.eventCode).toBe(eventCode);
  });
});
