import { Component } from '@angular/core';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import {
  ActivatedRoute,
  Router,
  RouterStateSnapshot,
  provideRouter,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { isLoggedGuardFn } from '.';
import { AuthService } from '../auth.service';
import { NoAccessComponent } from '../pages/no-access/no-access.component';

@Component({
  template: '',
})
export class LoggedInTestComponent {}

describe('Functional Guards', () => {
  const mockRouter = jasmine.createSpyObj('Router', ['navigate']);
  const authServiceSpy = jasmine.createSpyObj('AuthService', ['isLoggedIn$']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideRouter([
          {
            path: 'logged-in',
            component: LoggedInTestComponent,
            canActivate: [isLoggedGuardFn],
          },
          {
            path: 'no-access',
            component: NoAccessComponent,
          },
        ]),
        {
          provide: Router,
          useValue: mockRouter,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {},
          },
        },
        {
          provide: AuthService,
          useValue: authServiceSpy,
        },
      ],
    });
  });

  it('isLoggedIn guard should return true', fakeAsync(async () => {
    authServiceSpy.isLoggedIn$.and.returnValue(of(true));
    // await RouterTestingHarness.create('/logged-in');
    // expect(TestBed.inject(Router).url).toEqual('/logged-in');

    const activatedRoute = TestBed.inject(ActivatedRoute);
    const guardResponse = TestBed.runInInjectionContext(() => {
      return isLoggedGuardFn(
        activatedRoute.snapshot,
        {} as RouterStateSnapshot
      ) as Observable<boolean>;
    });

    let guardOutput = null;
    guardResponse
      .pipe(delay(100))
      .subscribe((response) => (guardOutput = response));
    tick(100);

    expect(guardOutput).toBeTrue();
  }));

  it('isLoggedIn guard should return false', fakeAsync(async () => {
    authServiceSpy.isLoggedIn$.and.returnValue(of(false));
    // await RouterTestingHarness.create('/logged-in');
    // expect(TestBed.inject(Router).url).toEqual('/no-access');
    const activatedRoute = TestBed.inject(ActivatedRoute);
    authServiceSpy.isLoggedIn$.and.returnValue(of(false));
    const guardResponse = TestBed.runInInjectionContext(() => {
      return isLoggedGuardFn(
        activatedRoute.snapshot,
        {} as RouterStateSnapshot
      ) as Observable<boolean>;
    });

    let guardOutput = null;
    guardResponse
      .pipe(delay(100))
      .subscribe((response) => (guardOutput = response));
    tick(100);

    expect(guardOutput).toBeFalse();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['no-access']);
  }));
});
