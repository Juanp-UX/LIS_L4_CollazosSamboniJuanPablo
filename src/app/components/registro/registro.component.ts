import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  registroForm: FormGroup;

  registroConfirmado = false;
  confirmNombre = '';
  confirmEmail = '';

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      nombres: ['', [Validators.required, Validators.maxLength(40)]],
      apellidos: ['', [Validators.required, Validators.maxLength(40)]],
      genero: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }


  validarAlPerderFoco(controlName: string): void {
    const control = this.registroForm.get(controlName);
    control?.markAsTouched();
    control?.updateValueAndValidity();
  }


  campoInvalido(controlName: string): boolean {
    const control = this.registroForm.get(controlName);
    return !!control && control.invalid && control.touched;
  }


  campoValido(controlName: string): boolean {
    const control = this.registroForm.get(controlName);
    return !!control && control.valid && control.touched;
  }

  superaLongitud(controlName: string): boolean {
    const control = this.registroForm.get(controlName);
    return !!control && control.hasError('maxlength') && control.touched;
  }


  onSubmit(): void {
    if (this.registroForm.invalid) {
      Object.keys(this.registroForm.controls).forEach(campo => {
        this.registroForm.get(campo)?.markAsTouched();
      });
      return;
    }

    const { nombres, apellidos, email } = this.registroForm.value;

    this.confirmNombre = `${nombres} ${apellidos}`;
    this.confirmEmail = email;
    this.registroConfirmado = true;

    this.registroForm.reset();
    Object.keys(this.registroForm.controls).forEach(campo => {
      this.registroForm.get(campo)?.markAsUntouched();
    });
  }
}
