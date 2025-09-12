import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Users } from '../../services/users';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-comp-users',
  imports: [CommonModule, ],
  templateUrl: './comp-users.html',
  styleUrl: './comp-users.css'
})
export class CompUsers {

  data: User[];
  private myServiceUsers = inject(Users);

  constructor(){
    this.data = [];
  }
  // Hook
  ngOnInit():void{
    this.myServiceUsers.getUsers().subscribe(
  {
    next:(datos) => {
      this.data = datos
      console.log("Datos de la API:", this.data)
    },
    error:(err) => console.log("Error en API:", err),
    complete:() => console.log("La petición ha sido completada")
    })
  }

}