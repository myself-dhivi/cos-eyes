import { TestBed } from '@angular/core/testing';

import { TextExtrationService } from './text-extration.service';

describe('TextExtrationService', () => {
  let service: TextExtrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextExtrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
