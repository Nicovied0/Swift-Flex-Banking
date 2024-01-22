import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeOfferComponent } from './views/we-offer/we-offer.component';

const routes: Routes = [
  {
    path: "",
    component: WeOfferComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeOfferRoutingModule { }
