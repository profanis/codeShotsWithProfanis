import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, InjectionToken, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { first, pluck } from 'rxjs/operators';

function getPathParam(name: string): string {
  const activatedRoute = inject(ActivatedRoute);
  return activatedRoute.snapshot.params[name];
}

function getPathParam$(name: string): Observable<string> {
  const activatedRoute = inject(ActivatedRoute);
  return activatedRoute.params.pipe(pluck(name));
}

interface Logger {
  log: (value: string) => void;
}

const LOGGER_TOKEN = new InjectionToken<Logger>('Logger Injection Token', {
  factory: () => {
    return {
      log: console.log,
    };
  },
});

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>products works!</p> `,
  styleUrls: ['./products.component.scss'],
  providers: [
    {
      provide: LOGGER_TOKEN,
      useFactory: () => {
        const http = inject(HttpClient);
        return {
          log: (value: string) =>
            http.post('logger-domain', { value }).pipe(first()).subscribe(),
        };
      },
    },
  ],
})
export class ProductsComponent implements OnInit {
  constructor() {
    const logger = inject(LOGGER_TOKEN).log;
    logger('a value');
  }

  ngOnInit(): void {}
}
