import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-bars-double',
  templateUrl: './bars-double.component.html',
  styles: [
  ]
})
export class BarsDoubleComponent {

  providersData:ChartData<'bar'>= {
    labels: [ '2022', '2023', '2024', '2025', '2026', '2027', '2028' ],
    datasets:[
      { data: [100,300,400,300,100], label: 'Vehicule',backgroundColor: 'blue'}

    ]
  };
  providersLabels: string[] = ['2021', '2022','2023','2024','2025'];

  public barChartType: ChartType = 'bar';
  public barChartData: ChartData<'bar'> = {
    labels: [ '2022', '2023', '2024', '2025', '2026', '2027', '2028' ],
    datasets: [
      { data: [100,200,300,400,500], label: 'Seller A'},
       { data: [50,250,30,450,200], label: 'Seller B'},
    ],
    
  };
 
}
