import { Component, OnInit } from '@angular/core';
import { ProfesorResponseDTO } from '../../backend/models/profesor.response';
import { ProfesorService } from '../../backend/services/profesor.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProfesorRequestDTO } from '../../backend/models/profesor.request';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { UsuarioResponseDTO } from '../../backend/models/usuario.response';

@Component({
  standalone: true,
  selector: 'app-profesor',
  imports: [
    TableModule,
    CommonModule,
    FormsModule,
    DropdownModule,
    HttpClientModule,
    RouterModule,
    ButtonModule,
  ],
  templateUrl: './profesor.component.html',
  styleUrl: './profesor.component.scss',
  providers: [MessageService, ConfirmationService, ProfesorService]
})
export class ProfesorComponent implements OnInit {
  profesores: ProfesorResponseDTO[] = [];
  profesorDialog: boolean = false;
  profesor!: ProfesorResponseDTO;
  isNewProfesor: boolean = false;
  first = 0;
  rows = 0;

  sexOptions = [
    { label: 'MASCULINO', value: 'MASCULINO' },
    { label: 'FEMENINO', value: 'FEMENINO' }
  ];

  usuarios: UsuarioResponseDTO[] = [];
  usuariosOptions: { label: string, value: string }[] = [];

  constructor(
    private profesorService: ProfesorService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loadProfesores();
  }

  loadProfesores() {
    this.profesorService.getProfesores().subscribe({
      next: (data) => (this.profesores = data),
      error: (err) =>
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudieron cargar los profesores'})
    })
  }

  // Creación de un registro de Profesor
  openNew() {
    this.isNewProfesor = true;
    this.profesor = {
      id: '',
      usuario: '',
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      direccion: '',
      imagen: '',
      sexo: 'MASCULINO',
      fechaCreacion: '',
      fechaNacimiento: '',
      usuarioId: {
        id: '', email: '',
        clave: '',
        rolId: { id: 0, tipo: '' }
      }
    };
    this.profesorDialog = true;
  }

  // Edicacion de un registro de Profesor
  editProfesor(profesor: ProfesorResponseDTO) {
    this.isNewProfesor = false;
    this.profesor = { ...profesor };
    this.profesorDialog = true;
  }

  // Eliminación de un registro de Profesor
  deleteProfesor(profesor: ProfesorResponseDTO) {
    this.confirmationService.confirm({
      message: '¿Está seguro de eliminar el profesor ' + profesor.nombre + '?',
      header: 'Confirmar eliminación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.profesorService.deleteProfesor(profesor.id).subscribe({
          next: () => {
            this.messageService.add({ severity: 'success', summary: 'Eliminado', detail: 'Profesor eliminado', life: 3000 });
            this.loadProfesores();
          },
          error: (err) =>
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo eliminar el profesor', life: 3000 })
        });
      }
    });
  }

  saveProfesor(): void {
    const profesorRequest = {
      usuario: this.profesor.usuario,
      usuarioId: this.profesor.usuarioId.id,
      nombre: this.profesor.nombre,
      apellido: this.profesor.apellido,
      correo: this.profesor.correo,
      telefono: this.profesor.telefono,
      direccion: this.profesor.direccion,
      imagen: this.profesor.imagen,
      sexo: this.profesor.sexo,
      fechaNacimiento: this.profesor.fechaNacimiento
    };
    if (this.isNewProfesor) {
      this.profesorService.createProfesor(profesorRequest).subscribe({
        next: data => {
          this.messageService.add({ severity: 'success', summary: 'Creado', detail: 'Profesor creado', life: 3000 });
          this.profesorDialog = false;
          this.loadProfesores();
        },
        error: () => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo crear el profesor', life: 3000 });
        }
      });
    } else {
      this.profesorService.updateProfesor(this.profesor.id, profesorRequest).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Actualizado', detail: 'Profesor actualizado', life: 3000 });
          this.profesorDialog = false;
          this.loadProfesores();
        },
        error: () => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo actualizar el profesor', life: 3000 });
        }
      });
    }
  }

  onImageSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const fullResult: string = e.target.result;
        const base64Result = fullResult.split(',')[1];
        this.profesor.imagen = base64Result;
      };
      reader.readAsDataURL(file);
    }
  }

  hideDialog() {
    this.profesorDialog = false;
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: { first: number; rows: number; }) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.profesores ? this.first + this.rows >= this.profesores.length : true;
  }

  isFirstPage(): boolean {
    return this.profesores ? this.first === 0 : true;
  }
}
