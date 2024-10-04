import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionDatailsComponent } from './session-details.component';

describe('SessionDatailsComponent', () => {
  let component: SessionDatailsComponent;
  let fixture: ComponentFixture<SessionDatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SessionDatailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
