import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../finance.service';

@Component({
  selector: 'app-finance-list',
  templateUrl: './finance-list.component.html',
  styleUrls: ['./finance-list.component.scss']
})
export class FinanceListComponent implements OnInit {

  customers: any = [];

  constructor(private financeService: FinanceService) {
     this.customers = [...this.financeService.customersList];
  }

  ngOnInit(): void {
  }

  // customersList() {
  //   this.financeService.getCustomers().subscribe(data => console.log(data));
  // }
  
}
