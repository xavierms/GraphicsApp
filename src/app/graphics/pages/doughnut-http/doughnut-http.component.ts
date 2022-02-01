import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraphicsService } from '../../services/graphics.service';

@Component({
  selector: 'app-doughnut-http',
  templateUrl: './doughnut-http.component.html',
  styles: [
  ]
})
export class DoughnutHttpComponent implements OnInit {

  constructor(private GraphicsService: GraphicsService) { }
  // public doughnutChartData: ChartDataSets = [
  //   // [350, 450, 100, 150]
  // ];
  ngOnInit(): void {
    // this.GraphicsService.getUsuariosRedesSociales().subscribe(resp=>{
    //   console.log(resp);
      
    // })
    // this.GraphicsService.getUsuariosRedesSocialesDonaData()
    // .subscribe( ({ labels, values }) => {

    //   this.pieChartData.labels = labels;
    //   this.pieChartData.datasets.push( values[0] );

    // })
  }
  public doughnutChartType: ChartType = 'doughnut';
  public pieChartData: ChartData<'doughnut', number[], string | string[]> = {
    labels: [ [ 'Download', 'Sales' ], [ 'In', 'Store', 'Sales' ], 'Mail Sales' ],
    datasets: [ {
      data: [ 300, 500, 100 ]
    } ]
  };


}
