import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroTexto'
})
export class FiltroNombrePipe implements PipeTransform {

  transform(nombre: any, limite: any): any {
    if(nombre.length <= limite){
      return nombre;
    }
    return nombre.substr(0, limite) + '...';
  }

}
