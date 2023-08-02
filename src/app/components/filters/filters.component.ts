import {
  BreakpointObserver,
  BreakpointState,
  Breakpoints,
} from '@angular/cdk/layout';
import { DatePipe } from '@angular/common';
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

  cols: number = 4;
  rowHeight: string = '70px';

  constructor(
    private datePipe: DatePipe,
    breakpointObserver: BreakpointObserver
  ) {
    breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((state: BreakpointState) => {
        if (!state.matches) {
          this.cols = 4;
        } else {
          this.cols = 1;
        }
      });
  }

  onRefresh(): void {
    const filters = {
      documentNumber: this.documentNumber,
      currencyCode: this.selectedCurrency,
      startDate: this.datePipe.transform(this.startDate, 'yyyy-MM-dd'),
      endDate: this.datePipe.transform(this.endDate, 'yyyy-MM-dd'),
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
