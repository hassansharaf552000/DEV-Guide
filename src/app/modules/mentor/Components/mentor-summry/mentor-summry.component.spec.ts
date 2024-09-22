import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorSummryComponent } from './mentor-summry.component';

describe('MentorSummryComponent', () => {
  let component: MentorSummryComponent;
  let fixture: ComponentFixture<MentorSummryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MentorSummryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorSummryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
