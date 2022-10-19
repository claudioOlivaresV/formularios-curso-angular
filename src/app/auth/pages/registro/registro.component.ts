import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import { ValidatorService } from '../../../shared/validators/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.services.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.services.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.services.noPuedeSerUserName]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  }, {
    validators: [this.services.camposIguales('password', 'password2')]
  })
  numero = 1;

  get emailErrorMsg() : string | null {
    const error = this.miFormulario.get('email')?.errors;

    if(error?.required) {
      return 'Email es obligatorio'
    } else if (error?.pattern) {
      return 'Formato incorrecto'
    } else  if(error?.emailTomado) {
      return 'Email ya existe'
    }
    return null
  }

  constructor( private fb: FormBuilder, private services: ValidatorService, private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
  }

  campoNoValido( campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }
  // emailRequired() {
  //   return this.miFormulario.get('email')?.errors?.required && this.miFormulario.get('email')?.touched;
  // }
  // emailFormat() {
  //   return this.miFormulario.get('email')?.errors?.pattern && this.miFormulario.get('email')?.touched;
  // }
  // emailTomado() {
  //   return this.miFormulario.get('email')?.errors?.emailTomado && this.miFormulario.get('email')?.touched;
  // }

  submitForm() {
    this.miFormulario.markAllAsTouched();
  }

}
