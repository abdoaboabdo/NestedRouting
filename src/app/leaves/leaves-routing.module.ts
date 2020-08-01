import { HomeComponent } from './home/home.component';
import { Page404leavesComponent } from './page404leaves/page404leaves.component';
import { ApplyComponent } from './apply/apply.component';
import { LeavesComponent } from './leaves.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
      path: '', component: LeavesComponent, children: [
        
      {
        path: 'apply', component: ApplyComponent
      },
      { path: 'balance', loadChildren: () => import(`./balance/balance.module`).then(m => m.BalanceModule) },
      // {
      //    path: '', redirectTo: 'apply', pathMatch: 'full'
      // },
      {
        path: '', component: HomeComponent,pathMatch: 'full'
      },
      { path: '**', component: Page404leavesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeavesRoutingModule { }
