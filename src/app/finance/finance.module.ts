import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceListComponent } from './finance-list/finance-list.component';
import { FinanceDetailComponent } from './finance-detail/finance-detail.component';

@NgModule({
  declarations: [FinanceListComponent, FinanceDetailComponent],
  imports: [
    CommonModule,
    FinanceRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class FinanceModule { }
