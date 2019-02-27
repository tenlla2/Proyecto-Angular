import { Component, OnInit } from '@angular/core';
import { PeticionesService } from './../peticiones.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  textoCaja = '';
  constructor(public service: PeticionesService) {

  }

  ngOnInit() {
    this.service.primeraPeticionCanal();
  }
}
