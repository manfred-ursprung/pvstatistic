import { TestBed, inject } from '@angular/core/testing';

import { PventriesService } from './pventries.service';

describe('PventriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PventriesService]
    });
  });

  it('should be created', inject([PventriesService], (service: PventriesService) => {
    expect(service).toBeTruthy();
  }));
});
