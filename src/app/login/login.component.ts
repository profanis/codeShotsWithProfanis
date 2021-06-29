import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(private apiService: ApiService, private router: Router) {}

  submitForm() {
    if (this.form.invalid) {
      return;
    }

    this.apiService
      .login(this.form.get('username')?.value, this.form.get('password')?.value)
      .pipe(
        tap((response: any) => {
          this.router.navigate(['/dashboard']);
        })
      )
      .subscribe();
  }
}
