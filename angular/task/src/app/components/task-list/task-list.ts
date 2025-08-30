import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-task-list',
  standalone: true,
imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList implements OnInit {
  tasks: Task[];
  newTask: Task = { id: 0, title: '', completed: false, category: null };
  nextId: number;
  taskId: number | null = null;  
  foundTask: Task | undefined = undefined;  


  // se inicializan las tareas predeterminadas y el siguiente ID disponible.
  constructor() {
    this.tasks = [
      { id: 1, title: 'Estudiar programación web', completed: false, category: 'Estudio' },
      { id: 2, title: 'Estudiar Angular', completed: false, category: 'Estudio' },
      { id: 3, title: 'Estudiar UX/UI', completed: false, category: 'Estudio' },
      { id: 4, title: 'Leer un libro', completed: false, category: null },
      { id: 5, title: 'Hacer ejercicio', completed: false, category: 'Salud' }
    ];
    // Calcula el siguiente ID disponible basándose en el ID más alto de las tareas actuales.
    this.nextId = Math.max(0, ...this.tasks.map(task => task.id)) + 1;
  }

  ngOnInit() {
    // Muestra las tareas iniciales
    console.log('Tareas iniciales cargadas:', this.tasks);
  }


saveTask(): void {
  const taskToAdd: Task = {
    id: this.nextId++,
    title: this.newTask.title,
    completed: this.newTask.completed,
    category: this.newTask.category || null
  };
  this.tasks.push(taskToAdd);
  console.log('✅ Tarea agregada:', taskToAdd);
  this.newTask = { id: 0, title: '', completed: false, category: null };
}

getTaskById(id: number): Task | undefined {
  const foundTask = this.tasks.find(task => task.id === id);
  if (foundTask) {
    console.log(`Tarea con ID ${id} encontrada:`, foundTask);
  } else {
    console.warn(`Tarea con ID ${id} no encontrada.`);
  }
  return foundTask;
}

onSearchTask(): void {
    if (this.taskId !== null) {
      this.foundTask = this.getTaskById(this.taskId); // Llamada a la función getTaskById
    }
  }

updateTask(updatedTask: Task): void {
  const index = this.tasks.findIndex(task => task.id === updatedTask.id);
  if (index !== -1) {
    this.tasks[index] = { ...updatedTask };
    console.log('🔄 Tarea actualizada con éxito:', this.tasks[index]);
  } else {
    console.warn(`⚠️ No se pudo actualizar: Tarea con ID ${updatedTask.id} no encontrada.`);
  }
}

toggleCompleted(task: Task): void {
 const updatedTask = { ...task, completed: !task.completed };
 const index = this.tasks.findIndex(t => t.id === task.id);
 if (index !== -1) {
 this.updateTask(updatedTask);
}
}

deleteTask(id: number): void {
  const initialLength = this.tasks.length;
  this.tasks = this.tasks.filter(task => task.id !== id);
  if (this.tasks.length < initialLength) {
    console.log(`Tarea con ID ${id} eliminada.`);
 } else {
    console.warn(`No se pudo eliminar: Tarea con ID ${id} no encontrada.`);
  }
 }
}