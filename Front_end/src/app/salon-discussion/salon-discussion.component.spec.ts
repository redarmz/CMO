import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { SalonDiscussionComponent } from './salon-discussion.component';

describe('SalonDiscussionComponent', () => {
  let component: SalonDiscussionComponent;
  let fixture: ComponentFixture<SalonDiscussionComponent>;
  let mockActivatedRoute: any;
  let mockConversationService: any;

  beforeEach(() => {
    mockActivatedRoute = {
      params: of({ id: 'testId' }) // Simulate params Observable
    };

    mockConversationService = {
      getMessages: () => of([]) // Simulate getMessages Observable
    };

    TestBed.configureTestingModule({
      declarations: [SalonDiscussionComponent],
      imports: [HttpClientModule,FormsModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: 'ConversationService', useValue: mockConversationService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalonDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
