import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  seccion= [
    "En Angular, las directivas son clases que permiten agregar comportamientos adicionales a elementos del DOM o incluso transformar estos elementos y su contenido. Piensa en las directivas como instrucciones que puedes aplicar a los elementos de tu página para manipular sus propiedades, estructura, o incluso su comportamiento en tiempo de ejecución.",
    { titulo: 'Info 1', descripcion: 'Texto de la sección 1' },
    { titulo: 'Info 2', descripcion: 'Texto de la sección 2' },
    { titulo: 'Info 3', descripcion: 'Texto de la sección 3' }
];
 
indiceActual = 0;
  
anterior() {
  this.indiceActual =
    (this.indiceActual - 1 + this.seccion.length) % this.seccion.length;
}
 
siguiente() {
  this.indiceActual =
    (this.indiceActual + 1) % this.seccion.length;
}

}
