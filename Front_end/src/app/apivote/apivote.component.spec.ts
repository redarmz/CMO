import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIVoteComponent } from './apivote.component';

describe('APIVoteComponent', () => {
  let component: APIVoteComponent;
  let fixture: ComponentFixture<APIVoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [APIVoteComponent]
    });
    fixture = TestBed.createComponent(APIVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
