import { TestBed } from '@angular/core/testing';

import { SocialAccountService } from './social-account.service';

describe('SocialAccountService', () => {
  let service: SocialAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
