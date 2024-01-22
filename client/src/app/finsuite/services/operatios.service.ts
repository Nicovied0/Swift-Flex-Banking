import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class OperationsService {
  private mockUrl = '../../../assets/mocks/mock-operations.json';

  constructor(private http: HttpClient) { }

  getOperations(): Observable<Operations[]> {
    return this.http.get<Operations[]>(this.mockUrl).pipe(
      catchError(() => of([])),
      map(operations => operations.slice(-5))
    );
  }



}

export interface Operations {
  id: number;
  concept: string;
  amount: string;
  date: string;
  state: string;
  typeOfOperation: string;
}
