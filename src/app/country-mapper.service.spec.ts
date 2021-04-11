import { TestBed } from '@angular/core/testing';

import { CountryMapperService } from './country-mapper.service';

describe('CountryMapperService', () => {
  let service: CountryMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
