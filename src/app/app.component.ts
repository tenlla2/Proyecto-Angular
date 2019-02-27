import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fijarPie() {
    const alturaPie = $('app-pie').height();
    const alturaCabecera = $('app-cabecera').height();
    const alturaContenido = $('.contenido').height();
    const alturaVentana = $(window).height();
    return alturaContenido > alturaVentana - alturaPie - alturaCabecera ? false : true;
  }
}
