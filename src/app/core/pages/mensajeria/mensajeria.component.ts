import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../../backend/services/evento.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextarea } from 'primeng/inputtextarea';
import { NotificacionRequestDTO } from '../../../backend/models/notificacion.request';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mensajeria',
  imports: [
    CommonModule,
    InputTextModule,
    InputTextarea,
    ButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './mensajeria.component.html',
  styleUrl: './mensajeria.component.scss',
  providers: [EventoService]
})
export class MensajeriaComponent implements OnInit {
  notificationForm!: FormGroup;
  message: string = '';
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private notificationService: EventoService) {}

  ngOnInit(): void {
    this.notificationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.notificationForm.invalid) {
      return;
    }
    const notification: NotificacionRequestDTO = this.notificationForm.value;
    this.notificationService.enviarNotificacion(notification).subscribe({
      next: () => {
        this.message = 'Notificacion enviada correctamente';
        this.notificationForm.reset();
        this.submitted = false;
      },
      error: (error) => {
        console.error('Error al enviar notificacion', error);
        this.message = 'Error al enviar notificacion';
      }
    });
  }


}
