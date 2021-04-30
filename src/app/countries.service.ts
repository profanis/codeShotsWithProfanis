import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Logger, LOGGER } from './logger';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(
    @Inject(LOGGER) private logger: Logger,
    private httpClient: HttpClient
  ) {
    this.logger = logger;
  }

  get() {
    this.logger.log('GET CountriesService');
  }

  post() {
    this.logger.log('POST CountriesService');
  }
}
