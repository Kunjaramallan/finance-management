import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/finance', pathMatch: 'full' },
  { path: 'finance', loadChildren: () => import(`./finance/finance.module`).then(m => m.FinanceModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
