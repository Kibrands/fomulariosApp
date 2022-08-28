import { FormControl, ValidationErrors, AbstractControl } from '@angular/forms';

export class Validaciones {

    static nombreApellidoPattern: string = '([a-zA-ZáéíóúÁÉÍÚÓ]+) ([a-zA-ZáéíóúÁÉÍÚÓ]+)';

    static emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

    static noPuedeSerStrider = (control: FormControl): ValidationErrors | null => {
        const valor: string = control.value?.trim().toLowerCase();
        return valor === 'strider' ? { noStrinder: true } : null;
    }

    static camposIguales = (campo1: string, campo2: string): ValidationErrors | null => {
        return (formGroup: AbstractControl): ValidationErrors | null => {
            const valor1 = formGroup.get(campo1)?.value;
            const valor2 = formGroup.get(campo2)?.value;

            if (valor1 !== valor2) {
                formGroup.get(campo2)?.setErrors({ noIguales: true })
                return { noIguales: true }
            }

            formGroup.get(campo2)?.setErrors(null)
            return null;
        }
    }
}