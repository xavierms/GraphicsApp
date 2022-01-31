import { Component } from '@angular/core';

interface MenuItem{
  route: string;
  text : string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    li{
      cursor:pointer;
    }  
  `
  ]
})
export class MenuComponent {

menu: MenuItem[]=[
  {route:'/graphics/bar',text:'Bars'},
  {route:'/graphics/bar-double',text:'Doubles bars'},
  {route:'/graphics/doughnut',text:'Doughnut'},
  {route:'/graphics/doughnut-http',text:'Doughnut Http'},
]
}
