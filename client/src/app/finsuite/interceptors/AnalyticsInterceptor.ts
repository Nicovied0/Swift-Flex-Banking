import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AnalyticsService } from '../services/angalytics.service';
import { Analytics } from '../services/angalytics.service';

@Injectable()
export class CalculateChangesInterceptor implements HttpInterceptor {

  constructor(private analyticsService: AnalyticsService) { }
  private mockUrl = '../../../assets/mocks/mock-analytics.json';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url === this.mockUrl) {
      return next.handle(req).pipe(
        map(event => {
          if (event instanceof HttpResponse && event.body) {
            const modifiedData: Analytics[] = this.calculateChanges(event.body);
            return event.clone({ body: modifiedData });
          }
          return event;
        })
      );
    }

    return next.handle(req);

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
