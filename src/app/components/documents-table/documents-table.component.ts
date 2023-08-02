import { Component, Input } from '@angular/core';
import { Currency } from '../../models/currency.model';
import { Document } from '../../models/document.model';

@Component({
  selector: 'app-documents-table',
  templateUrl: './documents-table.component.html',
})
export class DocumentsTableComponent {
  @Input() documents: Document[] = [];
  @Input() currencies: Currency[] = [];

  getConvertedValue(document: Document, currencyCode: string): number | null {
    const conversion = document.convertedCurrencies.find(
      (cc) => cc.toCurrencyCode === currencyCode
    );
    return conversion?.convertedValue || null;
  }
}
