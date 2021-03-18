import { TestBed } from '@angular/core/testing';

import { IsFormValidGuardGuard } from './is-form-valid-guard.guard';

describe('IsFormValidGuardGuard', () => {
  let guard: IsFormValidGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsFormValidGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
