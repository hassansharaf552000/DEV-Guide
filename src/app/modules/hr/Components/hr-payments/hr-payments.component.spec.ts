import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrPaymentsComponent } from './hr-payments.component';

describe('HrPaymentsComponent', () => {
  let component: HrPaymentsComponent;
  let fixture: ComponentFixture<HrPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrPaymentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
