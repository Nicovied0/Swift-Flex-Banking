import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { InsurancesComponent } from './views/insurances/insurances.component';
import { InsurancesRoutingModule } from './insurances-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { BoxLinksComponent } from './components/box-links/box-links.component';

@NgModule({
  declarations: [
    InsurancesComponent,
    HeaderComponent,
    BoxLinksComponent,

  ],
  imports: [
    CommonModule,
    InsurancesRoutingModule,
    SharedModule
  ]
})
export class InsurancesModule { }
