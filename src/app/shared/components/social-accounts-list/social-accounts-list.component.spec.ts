import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAccountsListComponent } from './social-accounts-list.component';

describe('SocialAccountsListComponent', () => {
  let component: SocialAccountsListComponent;
  let fixture: ComponentFixture<SocialAccountsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialAccountsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialAccountsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
