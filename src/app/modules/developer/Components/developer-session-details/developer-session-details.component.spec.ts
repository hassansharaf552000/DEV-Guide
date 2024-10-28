import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperSessionDetailsComponent } from './developer-session-details.component';

describe('DeveloperSessionDetailsComponent', () => {
  let component: DeveloperSessionDetailsComponent;
  let fixture: ComponentFixture<DeveloperSessionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeveloperSessionDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperSessionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
