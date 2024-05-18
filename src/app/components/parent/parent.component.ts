import { Component, afterNextRender, viewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { outputToObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template: `
    <app-child
      [username]="username"
      (formIsValid)="formIsValidHandler($event)"
    />
  `,
  styles: ``,
})
export class ParentComponent {
  username = 'profanis';
  childComponentRef = viewChild<ChildComponent>(ChildComponent);

  constructor() {
    afterNextRender(() => {
      if (this.childComponentRef()) {
        outputToObservable(this.childComponentRef()!.usernameChange).subscribe(
          this.usernameChangeHandler,
        );
      }
    });
  }

  formIsValidHandler(event: any) {
    console.log('formIsValid', event);
  }

  usernameChangeHandler(event: any) {
    console.log('usernameChange', event);
  }
}
