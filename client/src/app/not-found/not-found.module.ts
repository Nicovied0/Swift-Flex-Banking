import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './view/not-found/not-found.component';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    SharedModule,

  ]
})
export class NotFoundModule { }
