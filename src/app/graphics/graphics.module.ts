import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { NgChartsModule } from 'ng2-charts';

import { GraphicsRoutingModule } from './graphics-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { BarsDoubleComponent } from './pages/bars-double/bars-double.component';
import { DoughnutChartComponent } from './pages/doughnut-chart/doughnut-chart.component';
import { GraphicBarComponent } from './components/graphic-bar/graphic-bar.component';
import { DoughnutHttpComponent } from './pages/doughnut-http/doughnut-http.component';

@NgModule({
  declarations: [
    BarsComponent,
    BarsDoubleComponent,
    DoughnutChartComponent,
    DoughnutHttpComponent,
    GraphicBarComponent
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    NgChartsModule,
    HttpClientModule
  ]
})
export class GraphicsModule { }
