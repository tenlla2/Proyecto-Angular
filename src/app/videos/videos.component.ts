import { PeticionesService } from './../peticiones.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  textoCaja = '';
  constructor(public service: PeticionesService) {

  }

  ngOnInit() {
    this.service.primeraPeticionVideo();
  }
}
