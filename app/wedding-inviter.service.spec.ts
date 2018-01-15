import { TestBed, inject } from '@angular/core/testing';

import { WeddingInviterService } from './wedding-inviter.service';

describe('WeddingInviterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeddingInviterService]
    });
  });

  it('should be created', inject([WeddingInviterService], (service: WeddingInviterService) => {
    expect(service).toBeTruthy();
  }));
});
