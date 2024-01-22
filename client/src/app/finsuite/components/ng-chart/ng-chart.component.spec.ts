import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgChartComponent } from './ng-chart.component';

describe('NgChartComponent', () => {
  let component: NgChartComponent;
  let fixture: ComponentFixture<NgChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgChartComponent]
    });
    fixture = TestBed.createComponent(NgChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
