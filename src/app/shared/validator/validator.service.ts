import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPattern: string = '([a-zA-ZáéíóúÁÉÍÚÓ]+) ([a-zA-ZáéíóúÁÉÍÚÓ]+)';
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  
  constructor() { }

  public noPuedeSerStrider = (control: FormControl): ValidationErrors | null => {
    const valor: string = control.value?.trim().toLowerCase();
    return  valor === 'strider' ? { noStrinder: true } : null;
  }
}
