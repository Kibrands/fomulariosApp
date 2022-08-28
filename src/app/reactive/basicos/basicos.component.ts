import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  //miFormulario: FormGroup = new FormGroup({
  //  nombre: new FormControl('GIGABYTE RTX 3070 Ti GDDR6 12GB'),
  //  precio: new FormControl(600),
  //  existencias: new FormControl(10)
  //});

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: [
      ,
      [Validators.required, Validators.minLength(3)]
    ],
    precio: [
      ,
      [Validators.required, Validators.min(0)]
    ],
    existencias: [
      ,
      [Validators.required, Validators.min(0)]
    ]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.setValue({
      nombre: 'GIGABYTE RTX 3070 Ti GDDR6 12GB',
      precio: 600,
      existencias: 10
    })
  }

  campoEsValido(campo: string): boolean | null {
    return this.miFormulario.controls[campo]?.errors && this.miFormulario.controls[campo]?.touched
  }

  guardar(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
