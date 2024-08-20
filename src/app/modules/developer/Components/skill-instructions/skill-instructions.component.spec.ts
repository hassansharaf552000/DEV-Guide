import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillInstructionsComponent } from './skill-instructions.component';

describe('SkillInstructionsComponent', () => {
  let component: SkillInstructionsComponent;
  let fixture: ComponentFixture<SkillInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillInstructionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
