import { TestBed } from '@angular/core/testing';

import { RockstardbEntityService } from './rockstardb-entity.service';

describe('RockstardbEntityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RockstardbEntityService = TestBed.get(RockstardbEntityService);
    expect(service).toBeTruthy();
  });
});
