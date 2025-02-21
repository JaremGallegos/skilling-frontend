import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { LoginRequestDTO } from '../../backend/models/login.request';
import { LoginService } from '../../backend/services/login.service';
import { NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-sign-in',
  imports: [
    DividerModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgIf
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  providers: [LoginService, HttpClient]
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: LoginService) {}

  // Al momento de iniciar el formulario se carga y limpia los inputs
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      clave: ['', Validators.required]
    })
  }

  // Verificacion al momento de enviar el formulario
  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const loginRequest: LoginRequestDTO = this.loginForm.value;

    this.authService.login(loginRequest).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response.message);
      },
      error: (err) => {
        console.error('Error en el login:', err);
        this.errorMessage = 'Credenciales incorrectas o error en el login';
      }
    });
  }
}
