import { TestBed } from '@angular/core/testing';

import { TransulationService } from './transulation.service';

describe('TransulationService', () => {
  let service: TransulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
