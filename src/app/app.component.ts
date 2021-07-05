import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  username!: FormControl;

  private readonly usernames = ['john', 'jane'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.username = this.fb.control(
      null,
      Validators.required,
      this.userValidator()
    );
  }

  private userExists(username: string): Observable<boolean> {
    return of(this.usernames.includes(username)).pipe(delay(2000));
  }

  private userValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.userExists(control.value).pipe(
        map((response) => (response ? { userExists: true } : null))
      );
    };
  }
}
