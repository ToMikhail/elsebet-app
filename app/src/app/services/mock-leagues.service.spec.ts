import { TestBed } from '@angular/core/testing';

import { MockLeaguesService } from './mock-leagues.service';

describe('MockLeaguesService', () => {
  let service: MockLeaguesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockLeaguesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
