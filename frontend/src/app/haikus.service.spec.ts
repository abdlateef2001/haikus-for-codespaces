import { TestBed } from '@angular/core/testing';

import { HaikusService } from './haikus.service';

describe('HaikusService', () => {
  let service: HaikusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HaikusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
