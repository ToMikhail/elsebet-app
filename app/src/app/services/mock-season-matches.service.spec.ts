import { TestBed } from '@angular/core/testing';

import { MockSeasonMatchesService } from './mock-season-matches.service';

describe('MockSeasonMatchesService', () => {
  let service: MockSeasonMatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockSeasonMatchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
