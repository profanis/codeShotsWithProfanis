import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';
import { catchError, finalize } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService
      .getAndThrow()
      .pipe(
        catchError((error) => {
          console.log('LOCAL ERROR: ', error);
          return throwError(error);
        }),
        finalize(() => console.log('THE END'))
      )
      .subscribe(
        (data) => console.log('HTTP RESPONSE: ', data),
        (error) => console.log('HTTP ERROR', error),
        () => console.log('HTTP IS DONE')
      );
  }
}
