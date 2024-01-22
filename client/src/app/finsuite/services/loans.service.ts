import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoansService {
  private mockUrl = '../../../assets/mocks/mock-lastloands.json';

  constructor(private http: HttpClient) { }

  getLoans(): Observable<Loans[]> {
    return this.http.get<Loans[]>(this.mockUrl).pipe(
      catchError(() => of([]))
    );
  }



}

export interface Loans {
  id: number;
  concept: string;
  amount: string;
  date: string;
  state: string;
  typeOfOperation: string;
}
