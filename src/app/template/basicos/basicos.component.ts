import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'GIGABYTE RTX 3070 Ti GDDR6 12GB',
    precio: 600,
    existencias: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls['producto']?.invalid && 
      this.miFormulario?.controls['producto']?.touched;
  }
  
  precioValido(): boolean {
    return this.miFormulario?.controls['precio']?.touched &&
      this.miFormulario?.controls['precio']?.value < 0;
  }

  guardar(): void {
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    });
  }

}
