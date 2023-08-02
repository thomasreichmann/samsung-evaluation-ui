import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Currency } from '../../models/currency.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  @Input() currencies: Currency[] = [];
  @Output() refreshData: EventEmitter<any> = new EventEmitter();

  selectedCurrency: string = '';
  startDate: string = '';
  endDate: string = '';
  documentNumber: string = '';

  onRefresh(): void {
    const filters = {
      documentNumber: this.documentNumber,
      currencyCode: this.selectedCurrency,
      startDate: this.startDate,
      endDate: this.endDate,
    };
    this.refreshData.emit(filters);
  }

  onClean(): void {
    this.documentNumber = '';
    this.selectedCurrency = '';
    this.startDate = '';
    this.endDate = '';
    this.onRefresh();
  }
}
