import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperrateComponent } from './developerrate.component';

describe('DeveloperrateComponent', () => {
  let component: DeveloperrateComponent;
  let fixture: ComponentFixture<DeveloperrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeveloperrateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
