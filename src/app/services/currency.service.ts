import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Currency } from '../models/currency.model';
import { Quotation } from '../models/quotation.model';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCurrencies(): Observable<Currency[]> {
    return this.http.get<Currency[]>(`${this.apiUrl}`);
  }

  getQuotations(): Observable<Quotation[]> {
    return this.http.get<Quotation[]>(`${this.apiUrl}/quotations`);
  }
}
