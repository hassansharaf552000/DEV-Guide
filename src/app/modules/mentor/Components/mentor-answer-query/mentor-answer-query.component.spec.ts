import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorAnswerQueryComponent } from './mentor-answer-query.component';

describe('MentorAnswerQueryComponent', () => {
  let component: MentorAnswerQueryComponent;
  let fixture: ComponentFixture<MentorAnswerQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MentorAnswerQueryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorAnswerQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
