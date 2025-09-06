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
}
