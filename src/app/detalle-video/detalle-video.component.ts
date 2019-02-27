import { PeticionesService } from './../peticiones.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-detalle-video',
  templateUrl: './detalle-video.component.html',
  styleUrls: ['./detalle-video.component.css'],
})
export class DetalleVideoComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer, public service: PeticionesService) { }
  ngOnInit() {
    this.service.detallesVideo(this.idVideo());
  }

  idVideo(){
    let url = window.location.href;
    return url.substr(url.lastIndexOf('/') + 1, url.length);
  }

  srcEmbed(){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.idVideo());
  }

}
