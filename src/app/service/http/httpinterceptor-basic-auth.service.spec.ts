import { TestBed } from '@angular/core/testing';

import { HTTPInterceptorBasicAuthService } from './httpinterceptor-basic-auth.service';

describe('HTTPInterceptorBasicAuthService', () => {
  let service: HTTPInterceptorBasicAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HTTPInterceptorBasicAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
