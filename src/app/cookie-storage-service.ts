import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookieStorageService {

  constructor(private cookieService: CookieService) {}

  // Store JSON as a cookie
  setJsonCookie(key: string, value: any, days: number = 1): Promise<void> {
    return new Promise((resolve) => {
      const jsonString = JSON.stringify(value);
      this.cookieService.set(key, jsonString, days, '/');
      resolve();
    });
  }

  // Retrieve JSON from cookie
  getJsonCookie<T>(key: string): Promise<T | null> {
    return new Promise((resolve) => {
      const cookieValue = this.cookieService.get(key);
      resolve(cookieValue ? JSON.parse(cookieValue) : null);
    });
  }

  // Delete a cookie
  deleteCookie(key: string): Promise<void> {
    return new Promise((resolve) => {
      this.cookieService.delete(key);
      resolve();
    });
  }
}
