import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzesCreatedComponent } from './quizzes-created.component';

describe('QuizzesCreatedComponent', () => {
  let component: QuizzesCreatedComponent;
  let fixture: ComponentFixture<QuizzesCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizzesCreatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizzesCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
