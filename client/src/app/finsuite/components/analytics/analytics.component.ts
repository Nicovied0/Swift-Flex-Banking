import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../services/angalytics.service';
import { Analytics } from '../../services/angalytics.service';
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
  analytics: Analytics[] = [];

  constructor(private analyticsService: AnalyticsService) { }



  ngOnInit(): void {
    this.getService()
  }

  getService() {
    this.analyticsService.getAnalytics().subscribe(response => {
      this.analytics = response;
    });
  }

  formatPercentage(percentage: number): string {
    return (percentage.toFixed(4) + '%');
  }

}
