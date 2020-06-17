import { Routes } from '@angular/router';
import { RouterModule } from  '@angular/router';
import { FinanceListComponent } from './finance-list/finance-list.component';
import { FinanceDetailComponent } from './finance-detail/finance-detail.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: FinanceListComponent },
  { path: 'detail', component: FinanceDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FinanceRoutingModule { }
