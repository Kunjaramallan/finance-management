import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'customer', loadChildren: () => import(`./finance/finance.module`).then(m => m.FinanceModule) },
  { path: '**', component: PagenotfoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
