import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingHrComponent } from './booking-hr.component';

describe('BookingHrComponent', () => {
  let component: BookingHrComponent;
  let fixture: ComponentFixture<BookingHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingHrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
