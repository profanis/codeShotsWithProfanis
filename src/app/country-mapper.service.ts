import { Injectable } from '@angular/core';
import { CountryResponseModel } from './models/country-response.model';
import { CountryModel } from './models/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountryMapperService {
  toClient(countries: CountryResponseModel[]): CountryModel[] {
    return countries.map((country) => ({
      name: country.name,
      capital: country.capital,
      code: country.alpha2Code,
    }));
  }
}
