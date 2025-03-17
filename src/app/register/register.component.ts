import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formularioRegistro: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.formularioRegistro = this.fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(1)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  hasError(controlName: string, errorType: string) {
    return this.formularioRegistro.get(controlName)?.hasError(errorType) && this.formularioRegistro.get(controlName)?.touched;
  }

  register() {
    if (this.formularioRegistro.invalid) {
      this.formularioRegistro.markAllAsTouched();
      return;
    }

    const userData = this.formularioRegistro.value;

    this.authService.register(userData).subscribe({
      next: () => {
        alert('Registro exitoso.');
        this.router.navigate(['/colaboradores'], { state: { user: userData } });
      },
      error: (error) => {
        console.error('Error en el registro:', error);
        alert('Error en el registro, intenta de nuevo.');
      }
    });
  }
}
