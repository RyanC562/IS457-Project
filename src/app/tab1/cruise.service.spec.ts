import { TestBed } from '@angular/core/testing';

import { CruiseService } from './cruise.service';

describe('CruiseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CruiseService = TestBed.get(CruiseService);
    expect(service).toBeTruthy();
  });
});
