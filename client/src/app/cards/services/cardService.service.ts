import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private mockUrl = '/assets/mocks/mock-cards.json';
  private localStorageKey = 'cardStatus';


  constructor(private http: HttpClient) { }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.mockUrl).pipe(
      catchError(() => of([]))
    );
  }

  getCardCount(): Observable<number> {
    return this.getCards().pipe(
      map(cards => cards.length)
    );
  }


  getCardStatusesFromLocalStorage(): CardStatus[] {
    const cardStatusesString = localStorage.getItem(this.localStorageKey);
    if (cardStatusesString) {
      return JSON.parse(cardStatusesString);
    }
    return [];
  }

  saveCardStatusesToLocalStorage(cardStatuses: CardStatus[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(cardStatuses));
  }

  toggleCard(cardId: number, newDisabledStatus: boolean): Observable<void> {
    const cardStatuses = this.getCardStatusesFromLocalStorage();
    const updatedCardStatuses = cardStatuses.map(status => {
      if (status.cardId === cardId) {
        status.disabled = newDisabledStatus;
      }
      return status;
    });

    this.saveCardStatusesToLocalStorage(updatedCardStatuses);

    return of(undefined);
  }

}

export interface Card {
  id: number;
  name: string;
  number: string;
  balance: string;
  currency: string;
  disabled: boolean;
}

export interface CardStatus {
  cardId: number;
  disabled: boolean;
}
