import { Component, Input, OnChanges } from '@angular/core';
import { Currency } from '../../models/currency.model';
import { Document } from '../../models/document.model';

@Component({
  selector: 'app-documents-table',
  templateUrl: './documents-table.component.html',
  styleUrls: ['./documents-table.component.scss'],
})
export class DocumentsTableComponent implements OnChanges {
  @Input() documents: Document[] = [];
  @Input() currencies: Currency[] = [];

  displayedColumns: string[] = this.getBaseColumns();

  ngOnChanges(): void {
    this.displayedColumns = this.getBaseColumns();

    this.currencies.forEach((currency) => {
      this.displayedColumns.push(currency.currencyCode);
    });
  }

  getBaseColumns(): string[] {
    return [
      'documentNumber',
      'documentDate',
      'currencyCode',
      'currencyDesc',
      'documentValue',
    ];
  }

  getConvertedValue(document: Document, currencyCode: string): number | null {
    const conversion = document.convertedCurrencies.find(
      (cc) => cc.toCurrencyCode === currencyCode
    );
    return conversion?.convertedValue || null;
  }

  getCurrency(currencyCode: string): Currency | undefined {
    return this.currencies.find((c) => c.currencyCode == currencyCode);
  }
}
