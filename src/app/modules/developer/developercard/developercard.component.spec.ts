import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopercardComponent } from './developercard.component';

describe('DevelopercardComponent', () => {
  let component: DevelopercardComponent;
  let fixture: ComponentFixture<DevelopercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevelopercardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
