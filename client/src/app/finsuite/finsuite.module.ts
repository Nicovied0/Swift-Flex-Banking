import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common'


import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select'
import { SharedModule } from '../shared/shared.module';

import { FinsuiteRoutingModule } from './finsuite-routing.module';
import { WalletComponent } from '../finsuite/components/wallet/wallet.component';
import { BalanceComponent } from '../finsuite/components/balance/balance.component';
import { InvestementsComponent } from '../finsuite/components/investements/investements.component';
import { OperationsComponent } from '../finsuite/components/operations/operations.component';
import { LoansComponent } from '../finsuite/components/loans/loans.component';
import { FixedTermsComponent } from '../finsuite/components/fixed-terms/fixed-terms.component';
import { AnalyticsComponent } from '../finsuite/components/analytics/analytics.component';
import { HomeComponent } from '../finsuite/views/home/home.component';

import { CardService } from './services/cards.service';
import { MoneyTypePipe } from './pipes/moneyType.pipe';
import { AnalyticsTipe } from './pipes/analtyicsName.pipe';
import { CommaSeparatorPipe } from './pipes/commaSeparator.pipe';
import { CustomDatePipe } from './pipes/customDate.pipe';
import { NgChartComponent } from './components/ng-chart/ng-chart.component';

@NgModule({
  declarations: [
    WalletComponent,
    BalanceComponent,
    InvestementsComponent,
    OperationsComponent,
    LoansComponent,
    FixedTermsComponent,
    HomeComponent,
    MoneyTypePipe,
    CustomDatePipe,
    CommaSeparatorPipe,
    AnalyticsTipe,
    AnalyticsComponent,
    NgChartComponent,
  ],
  imports: [
    CommonModule,
    FinsuiteRoutingModule,
    MatIconModule,
    MatSlideToggleModule,
    SharedModule,
    MatSelectModule,
    HttpClientModule,

  ], providers: [
    CardService, DatePipe
  ],


})
export class FinsuiteModule { showFiller = false; }
