import { Component, signal } from '@angular/core';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { DirectiveNgSw } from './directive-ng-sw/directive-ng-sw';
import { DirectiveNgIf } from './directive-ng-if/directive-ng-if';
import { DirectiveNgFor } from './directive-ng-for/directive-ng-for';

@Component({
  selector: 'app-root',
  imports: [Header, DirectiveNgSw, DirectiveNgIf, Footer, DirectiveNgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  materiaSeleccionada:string ='Matematicas';
  qualification: number = 0;
seccion= [
    "En Angular, las directivas son clases que permiten agregar comportamientos adicionales a elementos del DOM o incluso transformar estos elementos y su contenido. Piensa en las directivas como instrucciones que puedes aplicar a los elementos de tu página para manipular sus propiedades, estructura, o incluso su comportamiento en tiempo de ejecución.",
    { titulo: 'NgIf', descripcion: 'Texto de la sección 1' },
    { titulo: 'NgFor', descripcion: 'Texto de la sección 2' },
    { titulo: 'NgSwitch', descripcion: 'Texto de la sección 3' }
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
