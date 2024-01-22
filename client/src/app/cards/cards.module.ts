import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { SharedModule } from '../shared/shared.module';
import { HomeCardsComponent } from './views/home-cards/home-cards.component';
import { CardsRoutingModule } from './cards-routing.module';
import { HeadderCardsComponent } from './components/headder-cards/headder-cards.component';
import { ButtonsHeaderComponent } from './components/buttons-header/buttons-header.component';
import { BodyCardsComponent } from './components/body-cards/body-cards.component';


@NgModule({
  declarations: [
    HomeCardsComponent,
    HeadderCardsComponent,
    ButtonsHeaderComponent,
    BodyCardsComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    SharedModule,
    MatProgressBarModule
  ]
})
export class CardsModule { }
