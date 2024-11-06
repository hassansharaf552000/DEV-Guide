import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakenQuizzesCardComponent } from './taken-quizzes-card.component';

describe('TakenQuizzesCardComponent', () => {
  let component: TakenQuizzesCardComponent;
  let fixture: ComponentFixture<TakenQuizzesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TakenQuizzesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakenQuizzesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
