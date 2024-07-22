/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Update_profileComponent } from './update_profile.component';

describe('Update_profileComponent', () => {
  let component: Update_profileComponent;
  let fixture: ComponentFixture<Update_profileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Update_profileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Update_profileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
