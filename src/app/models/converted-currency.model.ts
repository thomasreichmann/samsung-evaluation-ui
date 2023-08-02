export class ConvertedCurrency {
  fromCurrencyCode: string;
  toCurrencyCode: string;
  originalValue: number;
  convertedValue: number;

  constructor() {
    this.fromCurrencyCode = '';
    this.toCurrencyCode = '';
    this.originalValue = 0;
    this.convertedValue = 0;
  }
}
