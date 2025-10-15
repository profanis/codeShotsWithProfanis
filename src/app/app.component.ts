import { Component, computed, inject, Injector } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { RegistrationComponent } from './signal-forms/registration/registration.component';
import { ContractFormComponent } from './contracting-system/pages/contract-form/contract-form.component';
import { BehaviorSubject, interval, map } from 'rxjs';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RegistrationComponent, ContractFormComponent, LoginComponent, RegisterComponent],
})
export class AppComponent {
  timer$ = interval(1000).pipe(map((value) => `Timer: ${value}`));
  private _value$ = new BehaviorSubject<string>('Initial Value');
  value$ = this._value$.asObservable();
  timerSignal = toSignal(this.value$, { requireSync: true });
  injector = inject(Injector);

  sss = toSignal(this.value$, {
    injector: this.injector,
  });

  timerComputed = computed(() => {
    return this.sss();

    // return runInInjectionContext(this.injector, () => {
    //   return toSignal(this.value$);
    // });
  });

  title = 'Code Shots With Profanis - Like and Subscribe :)';

  constructor() {
    this.timer$.subscribe((value) => {
      this._value$.next(value);
    });
  }
}
