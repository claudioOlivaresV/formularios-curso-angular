import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)'
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  noPuedeSerUserName(arg: FormControl): ValidationErrors | null {
    console.log(arg.value);
    const valor = arg.value?.trim().toLowerCase();
    if(valor === 'claudio') {
      return {
        noStrider: true
      }
    }

    return null
  }
  camposIguales (campo1: string, campo2: string) {
    return (formulario: AbstractControl) : ValidationErrors | null => {
      const pass1 = formulario.get(campo1)?.value;
      const pass2 = formulario.get(campo2)?.value;

      if(pass1 !== pass2) {
        formulario.get(campo2)?.setErrors({ noIguales: true})
        return { noIguales: true}
      }
      return null
    }
  }
}
