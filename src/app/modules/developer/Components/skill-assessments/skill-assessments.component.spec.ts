import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillAssessmentsComponent } from './skill-assessments.component';

describe('SkillAssessmentsComponent', () => {
  let component: SkillAssessmentsComponent;
  let fixture: ComponentFixture<SkillAssessmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillAssessmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillAssessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
