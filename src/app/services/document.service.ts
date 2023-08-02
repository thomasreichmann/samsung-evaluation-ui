import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Document } from '../models/document.model';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getDocuments(
    documentNumber?: string,
    currencyCode?: string,
    startDate?: string,
    endDate?: string
  ): Observable<Document[]> {
    let params = new HttpParams();

    if (documentNumber) params = params.set('documentNumber', documentNumber);
    if (currencyCode) params = params.set('currencyCode', currencyCode);
    if (startDate) params = params.set('startDate', startDate);
    if (endDate) params = params.set('endDate', endDate);

    return this.http.get<Document[]>(this.apiUrl, { params });
  }
}
