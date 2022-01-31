import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsComponent } from './pages/bars/bars.component';
import { BarsDoubleComponent } from './pages/bars-double/bars-double.component';
import { DoughnutChartComponent } from './pages/doughnut-chart/doughnut-chart.component';
import { DoughnutHttpComponent } from './pages/doughnut-http/doughnut-http.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'bar', component: BarsComponent
      },
      {
        path:'bar-double', component: BarsDoubleComponent
      },
      {
        path:'doughnut', component: DoughnutChartComponent
      },
      {
        path:'doughnut-http', component: DoughnutHttpComponent
      },
      {
        path:'**', redirectTo:'bar'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphicsRoutingModule { }
