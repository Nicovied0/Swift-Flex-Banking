import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvestmentsService {
  private mockUrl = '/assets/mocks/mock-investments.json';

  constructor(private http: HttpClient) { }

  getInvestiments(): Observable<Investments[]> {
    return this.http.get<Investments[]>(this.mockUrl).pipe(
      catchError(() => of([]))
    );
  }

}

export interface Investments {
  id: number;
  concept: string;
  icon: string;
  amount: string;
  date: string;
  typeOfOperation: string;
}
