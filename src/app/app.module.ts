import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, inject, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsService } from './settings.service';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        const settingsService = inject(SettingsService);
        const http = inject(HttpClient);
        return () =>
          new Promise((resolve) => {
            // load settings for a deployed app
            if (environment.production) {
              http
                .get('./config.json')
                .pipe(
                  tap((data: any) => {
                    settingsService.baseUrl = data.baseUrl;
                    resolve(true);
                  }),
                  catchError((error) => {
                    settingsService.baseUrl = 'http://default.api';
                    resolve(true);
                    return of(null);
                  })
                )
                .subscribe();
            } else {
              // load settings for a local app
              const settings = require('../../config.json');
              settingsService.baseUrl = settings.baseUrl;
              resolve(true);
            }
          });
      },
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
