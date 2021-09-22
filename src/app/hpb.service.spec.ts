import { TestBed } from '@angular/core/testing';

import { HpbService } from './hpb.service';

describe('HpbService', () => {
  let service: HpbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HpbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
