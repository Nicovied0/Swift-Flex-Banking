import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FixedTermsService {
  private mockUrl = '/assets/mocks/mock-fixedterms.json';

  constructor(private http: HttpClient) { }

  getfixedTerms(): Observable<FixedTerms[]> {
    return this.http.get<FixedTerms[]>(this.mockUrl).pipe(
      catchError(() => of([]))
    );
  }



}

export interface FixedTerms {
  id: number;
  amount: string;
  date: string;
  profit: string;
  positiveProfit: boolean;
}
