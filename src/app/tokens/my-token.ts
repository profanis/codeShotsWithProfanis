import { InjectionToken } from '@angular/core';

export interface MyToken {
  claims: string[];
  token: string;
  getMyToken(): string;
}

export const MY_TOKEN = new InjectionToken<MyToken>('my-token');
