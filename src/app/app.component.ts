import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountriesService } from './countries.service';
import { CountryModel } from './models/country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  countries$!: Observable<CountryModel[]>;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries$ = this.countriesService.get();
  }
}
