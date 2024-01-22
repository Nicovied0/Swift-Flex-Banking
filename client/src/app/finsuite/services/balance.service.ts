import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {
  private mockUrl = '/assets/mocks/mock-amountBalance.json';
  private mockUrl2 = '/assets/mocks/mock-dateBalance.json';

  constructor(private http: HttpClient) { }

  getAmountBalance(): Observable<AmountBalance[]> {
    return this.http.get<AmountBalance[]>(this.mockUrl).pipe(
      catchError(() => of([]))
    );
  }

  getDateBalance(): Observable<DateBalance[]> {
    return this.http.get<DateBalance[]>(this.mockUrl2).pipe(
      catchError(() => of([]))
    );
  }


}

export interface AmountBalance {
  id: number;
  mount: string;
  type: string;
}

export interface DateBalance {
  id: number;
  date: string;
  type: string;
  mount: string;
}
