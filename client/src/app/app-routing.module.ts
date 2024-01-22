import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginWard } from './core/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [loginWard],
    loadChildren: () =>
      import('./finsuite/finsuite.module').then((m) => m.FinsuiteModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingModule),
  },

  {
    path: 'payServices',
    canActivate: [loginWard],
    loadChildren: () =>
      import('./pay-service/pay-service.module').then(
        (m) => m.PayServiceModule
      ),
  },
  {
    path: 'insurance',
    canActivate: [loginWard],
    loadChildren: () =>
      import('./insurances/insurances.module').then((m) => m.InsurancesModule),
  },
  {
    path: 'weOffer',
    canActivate: [loginWard],
    loadChildren: () =>
      import('./we-offer/we-offer.module').then((m) => m.WeOfferModule),
  },
  {
    path: 'operations',
    canActivate: [loginWard],
    loadChildren: () =>
      import('./operations/operations.module').then((m) => m.OperationsModule),
  },
  {
    path: 'cards',
    canActivate: [loginWard],
    loadChildren: () =>
      import('./cards/cards.module').then((m) => m.CardsModule),
  },
  {
    path: 'loans',
    canActivate: [loginWard],
    loadChildren: () =>
      import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  {
    path: 'points',
    canActivate: [loginWard],
    loadChildren: () =>
      import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  {
    path: 'help',
    canActivate: [loginWard],
    loadChildren: () =>
      import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  {
    path: '**',
    canActivate: [loginWard],
    loadChildren: () =>
      import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
