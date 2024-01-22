import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsurancesService {
  private mockUrl = '/assets/mocks/mock-insurances.json';

  constructor(private http: HttpClient) { }

  getInsurances(): Observable<Insurances[]> {
    return this.http.get<Insurances[]>(this.mockUrl).pipe(
      catchError(() => of([])),
    );
  }
}

export interface Insurances {
  id: number;
  text: string;
  icon: string;
  url: string;
}
