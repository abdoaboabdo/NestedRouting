import { Page404balanceComponent } from './page404balance/page404balance.component';
import { EarnedComponent } from './earned/earned.component';
import { CasualComponent } from './casual/casual.component';
import { BalanceComponent } from './balance.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: BalanceComponent, children: [
      
      {
        path: 'casual', component: CasualComponent
      },
      {
        path: 'earned', component: EarnedComponent
      },
      {
        path: '', redirectTo: 'casual', pathMatch: 'full'
      },
      { path: '**', component:  Page404balanceComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalanceRoutingModule { }
