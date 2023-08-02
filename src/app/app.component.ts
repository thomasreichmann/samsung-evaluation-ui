import { Component, OnInit } from '@angular/core';
import { Currency } from './models/currency.model';
import { Document } from './models/document.model';
import { CurrencyService } from './services/currency.service';
import { DocumentService } from './services/document.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  documents: Document[] = [];
  currencies: Currency[] = [];
  filters: any = {};

  constructor(
    private documentService: DocumentService,
    private currencyService: CurrencyService
  ) {}

  ngOnInit(): void {
    this.loadCurrencies();
    this.loadDocuments();
  }

  loadCurrencies(): void {
    this.currencyService.getCurrencies().subscribe((data) => {
      this.currencies = data;
    });
  }

  loadDocuments(): void {
    this.documentService
      .getDocuments(
        this.filters.documentNumber,
        this.filters.currencyCode,
        this.filters.startDate,
        this.filters.endDate
      )
      .subscribe((data) => {
        this.documents = data;
      });
  }

  onRefresh(filters: any): void {
    this.filters = filters;
    this.loadDocuments();
  }
}
