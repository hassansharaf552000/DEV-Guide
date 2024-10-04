import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrAnswerQueryComponent } from './hr-answer-query.component';

describe('HrAnswerQueryComponent', () => {
  let component: HrAnswerQueryComponent;
  let fixture: ComponentFixture<HrAnswerQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrAnswerQueryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrAnswerQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
