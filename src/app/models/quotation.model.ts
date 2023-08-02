export class Quotation {
  fromCurrencyCode: string;
  toCurrencyCode: string;
  cotacao: number;
  dataHoraCotacao: string; // Using string format YYYY-MM-dd

  constructor() {
    this.fromCurrencyCode = '';
    this.toCurrencyCode = '';
    this.cotacao = 0;
    this.dataHoraCotacao = '';
  }
}
