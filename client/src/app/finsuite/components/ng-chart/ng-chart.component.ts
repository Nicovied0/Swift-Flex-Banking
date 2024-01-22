import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-ng-chart',
  templateUrl: './ng-chart.component.html',
  styleUrls: ['./ng-chart.component.scss']
})
export class NgChartComponent implements OnInit, OnChanges {
  @Input() selectedValue?: string;
  @Input() amountFiltered: number[] = [];
  @Input() xAxisFiltered: string[] = [];

  title = 'chart';
  public chart: any;

  public weeklyData: any = {
    labels: [] as string[],
    values: [] as number[],
  };

  public annualData: any = {
    labels: [] as string[],
    values: [] as number[],
  };

  ngOnInit(): void {
    this.loadChartData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedValue']) {
      if (this.chart) {
        this.chart.destroy();
      }
      this.loadChartData();
    }
    this.loadChartData();
  }

  loadChartData() {
    if (this.amountFiltered.length > 0 && this.xAxisFiltered.length > 0) {
      const data = this.selectedValue === 'weekly' ? this.weeklyData : this.annualData;

      data.labels = this.xAxisFiltered;
      data.values = this.amountFiltered;

      this.chart = new Chart("MyChart", {
        type: 'line',
        data: {
          labels: data.labels,
          datasets: [{
            label: this.selectedValue === 'weekly' ? 'Semana' : 'Anual',
            data: data.values,
            fill: false,
            borderColor: '#000',
            tension: 0.3
          }]
        },
        options: {
          aspectRatio: 2.5,
          scales: {
            y: {
              display: true,
              ticks: {
                color: '#a0a0a0'
              }
            },
            x: {
              display: true,
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        },
      });
    }
  }
}
