import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validators/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.services.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.services.emailPattern)]],
    username: ['', [Validators.required, this.services.noPuedeSerUserName]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  }, {
    validators: [this.services.camposIguales('password', 'password2')]
  })
  numero = 1;

  constructor( private fb: FormBuilder, private services: ValidatorService) { }

  ngOnInit(): void {
  }

  campoNoValido( campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitForm() {
    this.miFormulario.markAllAsTouched();
  }

}
