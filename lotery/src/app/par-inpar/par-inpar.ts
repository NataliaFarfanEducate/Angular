import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-par-inpar',
  imports: [],
  templateUrl: './par-inpar.html',
  styleUrl: './par-inpar.css'
})
export class ParInpar {
  mensaje: string;
  @Input() valor: number; // padre al hijo
  @Output() parImpar = new EventEmitter<string>(); // hijo al padre

  constructor(){
    this.mensaje="";
    this.valor=-1;
  }

  calcularParImpar():void{
    this.mensaje= this.valor % 2 == 0 ? `La suma de las balotas es: ${this.valor} y es Par` : 
    `La suma de las balotas es: ${this.valor} y es Impar`
    this.parImpar.emit(this.mensaje);
  }
}
