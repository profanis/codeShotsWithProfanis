import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  iconsPathFactory,
  TuiButtonModule,
  TuiLinkModule,
  TuiRootModule,
  TUI_ICONS_PATH,
} from '@taiga-ui/core';
import {
  TuiCheckboxLabeledModule,
  TuiFieldErrorModule,
  TuiInputModule,
  TuiInputPasswordModule,
} from '@taiga-ui/kit';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TuiRootModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiCheckboxLabeledModule,
    TuiLinkModule,
    TuiButtonModule,
    TuiFieldErrorModule,
  ],
  providers: [
    {
      provide: TUI_ICONS_PATH,
      useValue: iconsPathFactory('assets/taiga-ui/icons/'),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
