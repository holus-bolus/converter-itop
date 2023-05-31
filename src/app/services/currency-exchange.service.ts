import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyExchangeService {
  private apiUrl = 'https://v6.exchangerate-api.com/v6/bc1328402c37d79dfdbaf376/latest/USD';

  constructor(private http: HttpClient) { }

  getExchangeRate(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getRates() {
    return this.http.get<any>('https://api.exchangerate-api.com/v4/latest/UAH');
  }

}
