import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  miFormulario: FormGroup = new FormGroup({
    nombre: new FormControl('GIGABYTE RTX 3070 Ti GDDR6 12GB')
  });

  constructor() { }

}
