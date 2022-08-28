import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Validaciones } from '../../../shared/validator/validaciones';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: [
      '',
      [
        Validators.required,
        Validators.pattern(Validaciones.nombreApellidoPattern)
      ]
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(Validaciones.emailPattern)
      ],
      [ this.emailValidator ]
    ],
    username: [
      '',
      [
        Validators.required,
        Validaciones.noPuedeSerStrider
      ]
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ],
    confirmPassword: [
      '',
      [
        Validators.required
      ]
    ]
  },
  {
    validators: [Validaciones.camposIguales('password','confirmPassword')]
  });

  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;
    if(errors?.['required']) {
      return 'El email es obligatorio';
    } else if (errors?.['pattern']) {
      return 'El formato del correo no es válido';
    } else if (errors?.['emailTomado']) {
      return 'El email ya está en uso';
    }
    return '';
  }

  constructor(private fb: FormBuilder, private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Julio Matta',
      email: 'test1@test.com',
      username: 'kibrands',
      password: '123456',
      confirmPassword: '123456'
    })
  }

  campoNoValido(campo: string): boolean | undefined {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(): void {
    this.miFormulario.markAllAsTouched();

    console.log(this.miFormulario.value);
  }

}
