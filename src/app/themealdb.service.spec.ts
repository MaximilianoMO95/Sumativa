import { TestBed } from '@angular/core/testing';

import { ThemealdbService } from './themealdb.service';

describe('ThemealdbService', () => {
  let service: ThemealdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemealdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
