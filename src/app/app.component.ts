import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'profanis-yt';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countriesService.get();
  }
}
