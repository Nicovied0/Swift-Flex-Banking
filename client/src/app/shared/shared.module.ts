import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatIconModule } from '@angular/material/icon';
import { SideNavSharedComponent } from './side-nav-shared/side-nav-shared.component';
import { NavBarSharedComponent } from './nav-bar-shared/nav-bar-shared.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AuthInterceptor } from '../core/interceptor/authInterceptor';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { CardNumberPipe } from './pipes/cardNumber.pipe';

@NgModule({
  declarations: [
    SpinnerComponent,
    SideNavSharedComponent,
    NavBarSharedComponent,
    CardComponent,
    CardNumberPipe

  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatAutocompleteModule,
    MatPaginatorModule,

  ],
  exports: [
    MatButtonModule,
    SpinnerComponent,
    HttpClientModule,
    SideNavSharedComponent,
    NavBarSharedComponent,
    MatIconModule,
    MatPaginatorModule,
    FormsModule,
    CardComponent

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class SharedModule { }

