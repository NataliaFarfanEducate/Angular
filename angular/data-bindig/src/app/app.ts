import { Component } from '@angular/core';

import { Footer } from './footer/footer';
import { Header } from './header/header';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    Header,
    Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title:string = "Formas de declarar datos";
  private data: string = "Esto es una interpolación";
  public edad: number =18;
  protected nombre: string = "Holmant";

  //Método de acceso
  public getData(): string{
    return this.data;
  }

  //Métodos de orden
  public getEvento():void{
    alert("Soy click");
  }

}
