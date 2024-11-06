import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddquestionsandoptionsComponent } from './addquestionsandoptions.component';

describe('AddquestionsandoptionsComponent', () => {
  let component: AddquestionsandoptionsComponent;
  let fixture: ComponentFixture<AddquestionsandoptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddquestionsandoptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddquestionsandoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
