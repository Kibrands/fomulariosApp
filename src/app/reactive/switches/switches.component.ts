import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit{

  miFormulario: FormGroup = this.fb.group({
    genero: [
      'M', Validators.required
    ],
    notificaciones: [
      true, Validators.required
    ],
    terminosYCondiciones: [
      false, Validators.requiredTrue
    ]
  });

  persona = {
    genero: 'F',
    notificaciones: true
  }

  terminosYCondiciones: FormControl = this.fb.control(false,Validators.required);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({...this.persona,terminosYCondiciones: false})

    this.miFormulario.valueChanges.subscribe(({terminosYCondiciones, ...rest}) => {
      this.persona = rest;
    })
  }

  guardar(): void {
    if(this.miFormulario.invalid) {
      return;
    }
    const formValue = {...this.miFormulario}
    console.log(formValue.value);
    
  }

}
