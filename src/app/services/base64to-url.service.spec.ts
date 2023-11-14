import { TestBed } from '@angular/core/testing';

import { Base64toURLService } from './base64to-url.service';

describe('Base64toURLService', () => {
  let service: Base64toURLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Base64toURLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
