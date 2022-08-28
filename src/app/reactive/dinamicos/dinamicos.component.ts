import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre:  [
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],
    favoritos: this.fb.array([
      [
        'Metal Gear',
        Validators.required
      ],
      [
        'Death Stranding',
        Validators.required
      ]
    ],Validators.required)
  });

  nuevoFavorito: FormControl = this.fb.control('',Validators.required);

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  campoEsValido(campo: string): boolean | null {
    return this.miFormulario.controls[campo]?.errors &&
      this.miFormulario.controls[campo]?.touched;
  }

  agregarFavorito(): void {
    if (this.nuevoFavorito.invalid) {
      return;
    }

    const value = this.nuevoFavorito.value;
    this.favoritosArr.push(new FormControl(value,Validators.required));
    this.nuevoFavorito.reset();
  }

  eliminar(index: number): void {
    this.favoritosArr.removeAt(index);
  }

  guardar(): void {
    if(this.miFormulario.invalid)
    {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
