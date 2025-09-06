import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive-ng-sw',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directive-ng-sw.html',
  styleUrl: './directive-ng-sw.css'
})
export class DirectiveNgSw {
  estado:string = 'Por calificar';

}