import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactHrComponent } from './contact-hr.component';

describe('ContactHrComponent', () => {
  let component: ContactHrComponent;
  let fixture: ComponentFixture<ContactHrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactHrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
