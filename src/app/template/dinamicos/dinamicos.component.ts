import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
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

  nuevoFavorito: string = '';

  persona: Persona = {
    nombre: 'Julio',
    favoritos: [
      {
        id: 1,
        nombre: 'League of Legends'
      },
      {
        id: 2,
        nombre: 'Hollow Knight'
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {}

  eliminar(favId: number): void {
    this.persona.favoritos = this.persona.favoritos.filter(({id}) => id != favId);
  }

  agregar(): void {
    const nuevoJuego: Favorito = {
      id: 1 + Math.max(...this.persona.favoritos.map(persona => persona.id)),
      nombre: this.nuevoFavorito
    }
    this.persona.favoritos.push({...nuevoJuego});
    this.nuevoFavorito = '';
  }

}
