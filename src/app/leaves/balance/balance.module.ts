import { BalanceComponent } from './balance.component';
import { CasualComponent } from './casual/casual.component';
import { EarnedComponent } from './earned/earned.component';
import { Page404balanceComponent } from './page404balance/page404balance.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalanceRoutingModule } from './balance-routing.module';


@NgModule({
  declarations: [
    BalanceComponent,
    CasualComponent,
    EarnedComponent,
    Page404balanceComponent
  ],
  imports: [
    CommonModule,
    BalanceRoutingModule
  ]
})
export class BalanceModule { }
