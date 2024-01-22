import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private mockUrl = '/assets/mocks/mock-analytics.json';

  constructor(private http: HttpClient) { }

  getAnalytics(): Observable<Analytics[]> {
    return this.http.get<Analytics[]>(this.mockUrl).pipe(
      catchError(() => of([])),
      map(analyticsData => this.calculateChanges(analyticsData))
    );
  }

  calculateChanges(analyticsData: Analytics[]): Analytics[] {
    return analyticsData.map(item => {
      const lastMonthValue = parseFloat(item.lastmont);
      const currentMonthValue = parseFloat(item.mount);

      const isIncrease = currentMonthValue > lastMonthValue;
      const percentageDifference = ((currentMonthValue - lastMonthValue) / lastMonthValue) * 100;

      return {
        ...item,
        isIncrease,
        percentageDifference
      };
    });
  }
}

export interface Analytics {
  id: number;
  typename: string;
  lastmont: string;
  mount: string;
  isIncrease: boolean;
  percentageDifference: number;
}
