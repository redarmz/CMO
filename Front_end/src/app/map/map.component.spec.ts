
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MapComponent } from './map.component';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MapComponent],
      imports: [RouterTestingModule.withRoutes([])] // Nous importons RouterTestingModule pour simuler le Router
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the iframe', () => {
    const iframe = fixture.nativeElement.querySelector('iframe');
    expect(iframe).toBeTruthy(); // Vérifie si l'iframe est présent dans le DOM
  });
});
