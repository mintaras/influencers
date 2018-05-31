import { TestBed, inject } from '@angular/core/testing';

import { InfluencersService } from './influencers.service';

describe('InfluencersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfluencersService]
    });
  });

  it('should be created', inject([InfluencersService], (service: InfluencersService) => {
    expect(service).toBeTruthy();
  }));
});
