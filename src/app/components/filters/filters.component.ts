import { Component, EventEmitter, Output } from '@angular/core';
import { Currency } from '../../models/currency.model';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
})
export class FiltersComponent {
  @Output() refreshData: EventEmitter<any> = new EventEmitter();

  currencies: Currency[] = [];
  selectedCurrency: string = '';
  startDate: string = '';
  endDate: string = '';
  documentNumber: string = '';

  constructor(private currencyService: CurrencyService) {
    this.loadCurrencies();
  }

  loadCurrencies(): void {
    this.currencyService.getCurrencies().subscribe((data) => {
      this.currencies = data;
    });
  }

  onRefresh(): void {
    const filters = {
      documentNumber: this.documentNumber,
      currencyCode: this.selectedCurrency,
      startDate: this.startDate,
      endDate: this.endDate,
    };
    this.refreshData.emit(filters);
  }
}
