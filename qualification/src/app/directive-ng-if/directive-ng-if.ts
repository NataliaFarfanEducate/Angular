import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive-ng-if',
  imports: [CommonModule, FormsModule],
  templateUrl: './directive-ng-if.html',
  styleUrl: './directive-ng-if.css'
})

export class DirectiveNgIf {
  protected qualification:number;
  constructor(){
    this.qualification=-1;
  }
}

