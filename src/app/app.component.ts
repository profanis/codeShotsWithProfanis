import { Component } from '@angular/core';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private settingsService: SettingsService) {
    console.log('this is my setting:', this.settingsService.baseUrl);
  }
}
