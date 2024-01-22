import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeOfferRoutingModule } from './we-offer-routing.module';
import { BoxLinksComponent } from './components/box-links/box-links.component';
import { WeOfferComponent } from './views/we-offer/we-offer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BoxLinksComponent,
    WeOfferComponent
  ],
  imports: [
    CommonModule,
    WeOfferRoutingModule,
    SharedModule
  ]
})
export class WeOfferModule { }
