import { TestBed } from '@angular/core/testing';

import { DetectNSFWService } from './detect-nsfw.service';

describe('DetectNSFWService', () => {
  let service: DetectNSFWService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetectNSFWService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
