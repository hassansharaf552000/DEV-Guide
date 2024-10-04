import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrRequestComponent } from './hr-request.component';

describe('HrRequestComponent', () => {
  let component: HrRequestComponent;
  let fixture: ComponentFixture<HrRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
