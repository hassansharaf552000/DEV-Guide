import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrlayoutComponent } from './hrlayout.component';

describe('HrlayoutComponent', () => {
  let component: HrlayoutComponent;
  let fixture: ComponentFixture<HrlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HrlayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
