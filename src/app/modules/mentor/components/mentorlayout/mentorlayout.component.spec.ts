import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorlayoutComponent } from './mentorlayout.component';

describe('MentorlayoutComponent', () => {
  let component: MentorlayoutComponent;
  let fixture: ComponentFixture<MentorlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MentorlayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
