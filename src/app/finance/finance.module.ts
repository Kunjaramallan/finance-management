import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceListComponent } from './finance-list/finance-list.component';
import { FinanceDetailComponent } from './finance-detail/finance-detail.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { AccountModalComponent } from './account-modal/account-modal.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FinanceListComponent, FinanceDetailComponent, AccountModalComponent],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    HttpClientModule,
    ModalModule,
    ModalModule.forRoot()
  ],
  exports: [
    RouterModule
  ]
})
export class FinanceModule { }
