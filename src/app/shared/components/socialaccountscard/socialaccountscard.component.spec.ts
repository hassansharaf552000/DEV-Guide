import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialaccountscardComponent } from './socialaccountscard.component';

describe('SocialaccountscardComponent', () => {
  let component: SocialaccountscardComponent;
  let fixture: ComponentFixture<SocialaccountscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialaccountscardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialaccountscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
