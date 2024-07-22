import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRCardComponent } from './hr-card.component';

describe('HRCardComponent', () => {
  let component: HRCardComponent;
  let fixture: ComponentFixture<HRCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HRCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HRCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
