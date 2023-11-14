import { TestBed } from '@angular/core/testing';

import { EdenAIService } from './eden-ai.service';

describe('EdenAIService', () => {
  let service: EdenAIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdenAIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
