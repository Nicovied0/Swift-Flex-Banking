import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { OperationsRoutingModule } from './operations-routing.module';
import { OperationsComponent } from './views/operations/operations.component';
import { HeaderOperationsComponent } from './components/headerOperations/headerOperations.component';
import { BoxOperationsComponent } from './components/box-operations/box-operations.component';
import { SharedModule } from '../shared/shared.module';
import { BoxHedderComponent } from './components/box-hedder/box-hedder.component';
import { OperationsListComponent } from './components/operations-list/operations-list.component';
import { SerchBarOperationsComponent } from './components/serch-bar-operations/serch-bar-operations.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CustomDatePipe } from './pipes/date.pipe';
import { CustomDateHourPipe } from './pipes/dateHour.pipe';
import { SearchOperationService } from './services/searchOperation.service';

@NgModule({
  declarations: [
    OperationsComponent,
    HeaderOperationsComponent,
    BoxOperationsComponent,
    BoxHedderComponent,
    OperationsListComponent,
    SerchBarOperationsComponent,
    CustomDatePipe,
    CustomDateHourPipe,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    OperationsRoutingModule,
    SharedModule
  ], providers: [
    DatePipe,
    SearchOperationService
  ]
})
export class OperationsModule { }
