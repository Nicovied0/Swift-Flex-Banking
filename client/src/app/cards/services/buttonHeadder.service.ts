import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ButtonHeadderService {
  private mockUrl = '/assets/mocks/mock-cardsIcons.json';

  constructor(private http: HttpClient) { }

  getCardsButtons(): Observable<ButtonsHeadder[]> {
    return this.http.get<ButtonsHeadder[]>(this.mockUrl).pipe(
      catchError(() => of([])),
    );
  }
}

export interface ButtonsHeadder {
  id: number;
  text: string;
  icon: string;
  url: string;
}
