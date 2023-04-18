import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { isLoggedGuardFn } from '.';
import { AuthService } from '../auth.service';

describe('Functional Guards', () => {
  const authServiceSpy = jasmine.createSpyObj('AuthService', ['isLoggedIn$']);
  const mockRouter = jasmine.createSpyObj('Router', ['navigate']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: Router,
          useValue: mockRouter,
        },
        {
          provide: AuthService,
          useValue: authServiceSpy,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {},
          },
        },
      ],
    });
  });

  it('isLoggedIn guard should return true', fakeAsync(() => {
    const activatedRoute = TestBed.inject(ActivatedRoute);
    authServiceSpy.isLoggedIn$.and.returnValue(of(true));
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

  it('isLoggedIn guard should return false', fakeAsync(() => {
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
