import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Balota } from './balota/balota';
import { ParInpar } from './par-inpar/par-inpar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Balota, ParInpar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  valor1: number;
  valor2: number;

  numeroGandor: string;
  mensaje: string;
  suma: number;
  
  constructor(){
    this.valor1= -1;
    this.valor2= -1;
    this.numeroGandor="";
    this.mensaje="";
    this.suma=0;
  }

  getBalotaJuego(): number{
    let numeroBalota: number;
    numeroBalota = Math.floor(Math.random()*9)+1;
    return numeroBalota;
  }

  jugar():void{
    this.valor1 = this.getBalotaJuego();
    this.valor2 = this.getBalotaJuego();
    this.numeroGandor = `El número ganador es: ${this.valor1} ${this.valor2}`;
    this.suma = this.valor1 + this.valor2;
  }

  getParImpar(mensaje:string):void{
    this.mensaje = mensaje;
  }
}
