import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryAnswerComponent } from './query-answer.component';

describe('QueryAnswerComponent', () => {
  let component: QueryAnswerComponent;
  let fixture: ComponentFixture<QueryAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QueryAnswerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
