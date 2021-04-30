import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalLoggerService } from './local-logger.service';
import { LOGGER } from './logger';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: LOGGER,
      useClass: LocalLoggerService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
