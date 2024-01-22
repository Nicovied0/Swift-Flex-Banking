import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeOfferService {
  private mockUrl = '/assets/mocks/mock-weOffer.json';

  constructor(private http: HttpClient) { }

  getWeOffer(): Observable<WeOffer[]> {
    return this.http.get<WeOffer[]>(this.mockUrl).pipe(
      catchError(() => of([])),
    );
  }
}

export interface WeOffer {
  id: number;
  text: string;
  icon: string;
  url: string;
}
