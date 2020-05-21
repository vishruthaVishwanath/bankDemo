import { TestBed } from '@angular/core/testing';

import { AuthCustService } from './auth-cust.service';

describe('AuthCustService', () => {
  let service: AuthCustService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthCustService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
