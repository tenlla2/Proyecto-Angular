import { Component, OnInit } from '@angular/core';
import { PeticionesService } from './../peticiones.service';

@Component({
  selector: 'app-detalle-canal',
  templateUrl: './detalle-canal.component.html',
  styleUrls: ['./detalle-canal.component.css']
})
export class DetalleCanalComponent implements OnInit {

  constructor(public service: PeticionesService) { }
  ngOnInit() {
    this.service.detallesCanal(this.idCanal());
  }

  idCanal(){
    let url = window.location.href;
    return url.substr(url.lastIndexOf('/') + 1, url.length);
  }

}
