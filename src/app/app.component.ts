import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fijarPie(){
    let alturaPie = $("app-pie").height();
    let alturaCabecera = $("app-cabecera").height();
    let alturaContenido = $(".contenido").height();
    let alturaVentana = $(window).height();
    return (alturaContenido > alturaVentana-alturaPie-alturaCabecera) ? false : true;
  }
}
