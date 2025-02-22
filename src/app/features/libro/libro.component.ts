import { Component, OnInit } from '@angular/core';
import { LibroResponseDTO } from '../../backend/models/libro.response';
import { LibroService } from '../../backend/services/libro.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LibroRequestDTO } from '../../backend/models/libro.request';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextarea } from 'primeng/inputtextarea';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-libro',
  imports: [
    CommonModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    InputTextarea,
    ReactiveFormsModule,
    ConfirmDialogModule
  ],
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.scss',
  providers: [LibroService, ConfirmationService, MessageService, HttpClient]
})
export class LibroComponent implements OnInit {
  libros: LibroResponseDTO[] = [];
  displayDialog: boolean = false;
  libroForm!: FormGroup;
  isEdit: boolean = false;
  selectedLibroId: string | null = null;
  csvFile: File | null = null;

  constructor(
    private libroService: LibroService,
    private fb: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loadLibros();
    this.libroForm = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      isbn: ['', Validators.required],
      fechaPublicacion: ['', Validators.required],
      resumen: ['', Validators.required]
    });
  }

  loadLibros() {
    this.libroService.getLibros().subscribe({
      next: (data) => this.libros = data,
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudieron cargar los libros'});
      }
    });
  }

  openNew() {
    this.isEdit = false;
    this.selectedLibroId = null;
    this.libroForm.reset();
    this.displayDialog = true;
  }

  editLibro(libro: LibroResponseDTO) {
    this.isEdit  = true;
    this.selectedLibroId = libro.id;
    this.libroForm.patchValue({
      titulo: libro.titulo,
      autor: libro.autor,
      isbn: libro.isbn,
      fechaPublicacion: libro.fechaPublicacion,
      resumen: libro.resumen
    });
    this.displayDialog = true;
  }

  deleteLibro(libro: LibroResponseDTO) {
    this.confirmationService.confirm({
      message: '¿Esta seguro que desea eliminar este libro ' + libro.titulo + '?',
      header: 'Confirmar eliminación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.libroService.deleteLibro(libro.id).subscribe({
          next: () => {
            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Libro eliminado', life: 3000 });
            this.loadLibros();
          },
          error: () => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar el libro', life: 3000 });
          }
        });
      }
    });
  }

  saveLibro() {
    if (this.libroForm.invalid) {
      this.libroForm.markAllAsTouched();
      return;
    }

    const libroData: LibroRequestDTO = this.libroForm.value;
    if (this.isEdit && this.selectedLibroId) {
      this.libroService.updateLibro(this.selectedLibroId, libroData).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Libro actualizado' });
          this.displayDialog = false;
          this.loadLibros();
        },
        error: () => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al actualizar el libro' });
        }
      })
    } else {
      this.libroService.createLibro(libroData).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Libro creado' });
          this.displayDialog = false;
          this.loadLibros();
        },
        error: () => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al crear el libro'});
        }
      });
    }
  }

  onCSVFileChange(event: any) {
    const files: FileList = event.target.files;
    if (files.length > 0) {
      this.csvFile = files[0];
    }
  }


  uploadCSV() {
    if (!this.csvFile) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Seleccione un archivo CSV' });
      return;
    }
    this.libroService.uploadLibros(this.csvFile).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Libros cargados desde CSV' });
        this.loadLibros();
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al cargar CSV' });
      }
    });
  }
}
