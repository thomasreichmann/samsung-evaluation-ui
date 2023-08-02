import { ConvertedCurrency } from './converted-currency.model';

export class Document {
  documentId: number;
  documentNumber: string;
  notaFiscal: string;
  documentDate: string;
  documentValue: number;
  currencyCode: string;
  convertedCurrencies: ConvertedCurrency[];

  constructor() {
    this.documentId = 0;
    this.documentNumber = '';
    this.notaFiscal = '';
    this.documentDate = '';
    this.documentValue = 0;
    this.currencyCode = '';
    this.convertedCurrencies = [];
  }
}
