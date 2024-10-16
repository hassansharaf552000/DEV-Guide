import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsocialaccountComponent } from './addsocialaccount.component';

describe('AddsocialaccountComponent', () => {
  let component: AddsocialaccountComponent;
  let fixture: ComponentFixture<AddsocialaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddsocialaccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsocialaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
