/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Forget_passwordComponent } from './forget_password.component';

describe('Forget_passwordComponent', () => {
  let component: Forget_passwordComponent;
  let fixture: ComponentFixture<Forget_passwordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forget_passwordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forget_passwordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
