import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importez FormsModule depuis @angular/forms

import { CreatEventComponent } from './creat-event.component';

describe('CreatEventComponent', () => {
  let component: CreatEventComponent;
  let fixture: ComponentFixture<CreatEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatEventComponent],
      imports: [HttpClientModule,FormsModule]
    });
    fixture = TestBed.createComponent(CreatEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
