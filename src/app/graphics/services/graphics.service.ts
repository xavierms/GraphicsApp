import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  constructor() { }
  // getUsuariosRedesSociales() {
  //   return this.http.get('http://localhost:3000/grafica');
  // }

  // getUsuariosRedesSocialesDonaData() {
  //   return this.getUsuariosRedesSociales()
  //       .pipe(
  //         // delay(1500),
  //         map( data => {
  //           const labels = Object.keys( data );
  //           const values = Object.values( data );
  //           return { labels, values };
  //         })
  //       )
  // }
}
