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
  loading: boolean = false;

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
    this.loading = true;
    this.currencyService.getCurrencies().subscribe({
      next: (data) => {
        this.currencies = data;
      },
      error: (error) => {
        console.error(error);
        this.loading = false;
      },
    });
  }

  loadDocuments(): void {
    this.loading = true;
    this.documentService
      .getDocuments(
        this.filters.documentNumber,
        this.filters.currencyCode,
        this.filters.startDate,
        this.filters.endDate
      )
      .subscribe({
        next: (data) => {
          this.documents = data;
          this.loading = false;
        },
        error: (error) => {
          console.error(error);
          this.loading = false;
        },
      });
  }

  onRefresh(filters: any): void {
    this.filters = filters;
    this.loadDocuments();
  }
}
