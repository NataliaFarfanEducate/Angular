import { Component } from '@angular/core';
import { DirectiveNgFor } from '../directive-ng-for/directive-ng-for';

@Component({
  selector: 'app-directive-ng-outlet',
  imports: [],
  templateUrl: './directive-ng-outlet.html',
  styleUrl: './directive-ng-outlet.css'
})
export class DirectiveNgOutlet {
  miComponente: any = DirectiveNgFor; 

}
