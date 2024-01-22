import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayServiceRoutingModule } from './pay-service-routing.module';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { PayComponent } from './components/pay/pay.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    PayComponent,

  ],
  imports: [
    CommonModule,
    PayServiceRoutingModule,
    SharedModule
  ]
})
export class PayServiceModule { }
