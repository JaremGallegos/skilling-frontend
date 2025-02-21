import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { UsuarioService } from '../../backend/services/usuario.service';
import { UsuarioRequestDTO } from '../../backend/models/usuario.request';
import { RolService } from '../../backend/services/rol.service';
import { RolResponseDTO } from '../../backend/models/rol.response';
import { AuthGuardService } from '../../backend/services/auth-guard.service';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    DividerModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgIf,
    NgFor
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers: [UsuarioService, RolService, AuthGuardService, HttpClient]
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  roles: RolResponseDTO[] = [];
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private registerService: UsuarioService,
    private rolesService: RolService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      clave: ['', Validators.required],
      rolId: [null, Validators.required]
    })
    this.rolesService.getRoles().subscribe({
      next: (response: RolResponseDTO[]) => {
        this.roles = response;
      },
      error: (err) => {
        console.error('Error al obtener roles: ', err);
      }
    })
  }

  onRegister(): void {
    if (this.registerForm.invalid) {
      return;
    }

    const registerRequest: UsuarioRequestDTO = this.registerForm.value;
    this.registerService.createUsuario(registerRequest).subscribe({
      next: (response) => {
        console.log('Registro exitoso, id: ', response.id);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Error al tratar de registrarse:', err);
        this.errorMessage = 'La credenciales no cumplen con las peticiones';
      }
    })
  }
}
