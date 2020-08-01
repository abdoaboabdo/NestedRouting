import { LeavesComponent } from './leaves.component';
import { ApplyComponent } from './apply/apply.component';
import { Page404leavesComponent } from './page404leaves/page404leaves.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavesRoutingModule } from './leaves-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    LeavesComponent,
    ApplyComponent,
    Page404leavesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LeavesRoutingModule
  ]
})
export class LeavesModule { }
