import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {
  private mockUrl = '/assets/mocks/mock-operations.json';

  constructor(private http: HttpClient) { }

  getOperations(): Observable<Operations[]> {
    return this.http.get<Operations[]>(this.mockUrl).pipe(
      map(operations => this.translateOperationsState(operations)),
      catchError(() => of([]))
    );
  }

  private translateOperationsState(operations: Operations[]): Operations[] {
    return operations.map(operation => {
      if (operation.state === 'completed') {
        operation.state = 'Completado';
      } else if (operation.state === 'inProcess') {
        operation.state = 'Pendiente';
      }
      return operation;
    });
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
