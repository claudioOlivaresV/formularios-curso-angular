import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito [];
}
interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {
  persona: Persona = {
    nombre: 'Claudio',
    favoritos: [
      { id: 1, nombre: 'fav 1'},
      { id: 2, nombre: 'fav 1'}

    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    console.log('formulario posteado');
    

  }
  

}
