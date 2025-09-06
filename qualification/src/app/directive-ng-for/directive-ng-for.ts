import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive-ng-for',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directive-ng-for.html',
  styleUrl: './directive-ng-for.css'
})
export class DirectiveNgFor {
  materias: string[] = ['Matemáticas', 'Física', 'Química', 'Historia', 'Lengua'];

  @Input() materiaSeleccionada: string = this.materias[0];
  @Output() materiaSeleccionadaChange = new EventEmitter<string>();

  onMateriaChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.materiaSeleccionada = value;
    this.materiaSeleccionadaChange.emit(this.materiaSeleccionada);
  }
}
