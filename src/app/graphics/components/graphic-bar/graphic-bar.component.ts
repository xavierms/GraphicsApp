import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-graphic-bar',
  templateUrl: './graphic-bar.component.html',
  styles: [
  ]
})
export class GraphicBarComponent implements OnInit {
  @Input() horizontal: boolean = false;

  constructor() { }
  @Input() barChartLabels: [] = [
    // '2020', '2021', '2022', '2023', '2024', '2025', '2026'
  ];
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    }
  };
  public barChartType: ChartType = 'bar';
  @Input() barChartData: ChartData<'bar'> = {
    //labels: [ '2022', '2023', '2024', '2025', '2026', '2027', '2028' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Angular', backgroundColor: '#FAAF50', hoverBackgroundColor: 'red'},
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'ReactJS', backgroundColor: '#D6456C', hoverBackgroundColor: 'red'},
      { data: [ 8, 38, 70, 59, 66, 80, 100 ], label: 'VueJS'  , backgroundColor: '#7658ED', hoverBackgroundColor: 'red' },
      
    ]
  };
  ngOnInit(): void {
    if ( this.horizontal ){
      this.barChartType =  'line';
    }
  }
}
