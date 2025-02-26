import { TestBed } from '@angular/core/testing';

import { MockLeagueService } from './mock-league.service';

describe('MockLeagueService', () => {
  let service: MockLeagueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockLeagueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
