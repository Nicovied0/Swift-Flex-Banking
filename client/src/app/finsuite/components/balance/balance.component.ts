import { Component } from '@angular/core';
import { BalanceService, AmountBalance, DateBalance } from '../../services/balance.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent {
  constructor(private balanceService: BalanceService) { }

  selectedValue: string = 'weekly';

  amountBalances: AmountBalance[] = [];
  dateBalances: DateBalance[] = [];
  amountfilteredBalances: AmountBalance[] = [];
  datefilteredBalances: DateBalance[] = [];
  amountFiltered: any[] = [];
  xAxisFiltered: any[] = [];


  ngOnInit(): void {
    this.getService();
  }

  getService() {
    this.balanceService.getAmountBalance().subscribe(response => {
      this.amountBalances = response;
      this.filterBalances();

    });
    this.balanceService.getDateBalance().subscribe(response => {
      this.dateBalances = response;
      this.filterBalances();
    });
  }

  filterBalances() {
    this.amountfilteredBalances = this.amountBalances.filter(balance => balance.type === this.selectedValue);
    this.datefilteredBalances = this.dateBalances.filter(balance => balance.type === this.selectedValue);
    this.amountFiltered = this.datefilteredBalances.map(balance => balance.mount).map(item => parseFloat(item));
    this.xAxisFiltered = this.datefilteredBalances.map(balance => balance.date)
  }
}
