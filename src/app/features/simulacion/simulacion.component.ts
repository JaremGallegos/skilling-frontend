import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SimulacionService } from '../../backend/services/simulacion.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarModule } from 'angular-calendar';
import { InputTextModule } from 'primeng/inputtext';
import { SimulacionResponseDTO } from '../../backend/models/simulacion.response';
import { SimulacionRequestDTO } from '../../backend/models/simulacion.request';

@Component({
  selector: 'app-simulacion',
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    ConfirmDialogModule
  ],
  templateUrl: './simulacion.component.html',
  styleUrl: './simulacion.component.scss',
  providers: [SimulacionService, ConfirmationService, MessageService, HttpClient]
})
export class SimulacionComponent implements OnInit {
  simulaciones: SimulacionResponseDTO[] = [];
  displayDialog: boolean = false;
  simulacionForm!: FormGroup;
  isEdit: boolean = false;
  selectedSimulacionId: string | null = null;
  jsonlFile: File | null = null;

  constructor(
    private simulacionService: SimulacionService,
    private fb: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loadSimulaciones();
    this.simulacionForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      estado: ['', Validators.required],
      tiempoInicio: ['', Validators.required],
      tiempoFin: ['', Validators.required]
    })
  }

  loadSimulaciones() {
    this.simulacionService.getSimulaciones().subscribe({
      next: (data) => this.simulaciones = data,
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudieron cargar las simulaciones' });
      }
    });
  }

  openNew() {
    this.isEdit = false;
    this.selectedSimulacionId = null;
    this.simulacionForm.reset();
    this.displayDialog = true;
  }

  editSimulacion(sim: SimulacionResponseDTO) {
    this.isEdit = true;
    this.selectedSimulacionId = sim.id;
    this.simulacionForm.patchValue({
      nombre: sim.nombre,
      descripcion: sim.descripcion,
      estado: sim.estado,
      tiempoInicio: sim.tiempoInicio,
      tiempoFin: sim.tiempoFin
    });
    this.displayDialog = true;
  }

  deleteSimulacion(sim: SimulacionResponseDTO) {
    this.confirmationService.confirm({
      message: `¿Está seguro que desea eliminar la simulación "${sim.nombre}"?`,
      header: 'Confirmar eliminación',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.simulacionService.deleteSimulacion(sim.id).subscribe({
          next: () => {
            this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Simulación eliminada', life: 3000 });
            this.loadSimulaciones();
          },
          error: () => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al eliminar la simulación', life: 3000 });
          }
        });
      }
    });
  }

  saveSimulacion() {
    if (this.simulacionForm.invalid) {
      this.simulacionForm.markAllAsTouched();
      return;
    }
    const simData: SimulacionRequestDTO = this.simulacionForm.value;
    if (this.isEdit && this.selectedSimulacionId) {
      this.simulacionService.updateSimulacion(this.selectedSimulacionId, simData).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Simulación actualizada' });
          this.displayDialog = false;
          this.loadSimulaciones();
        },
        error: () => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al actualizar la simulación' });
        }
      });
    } else {
      this.simulacionService.createSimulacion(simData).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Simulación creada' });
          this.displayDialog = false;
          this.loadSimulaciones();
        },
        error: () => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al crear la simulación' });
        }
      });
    }
  }

  onJsonlFileChange(event: any) {
    const files: FileList = event.target.files;
    if (files.length > 0) {
      this.jsonlFile = files[0];
    }
  }

  uploadJsonl() {
    if (!this.jsonlFile) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Seleccione un archivo JSONL' });
      return;
    }
    this.simulacionService.uploadSimulacionesFromJsonl(this.jsonlFile).subscribe({
      next: () => {
        this.messageService.add({ severity: 'success', summary: 'Exitoso', detail: 'Simulaciones cargadas desde JSONL' });
        this.loadSimulaciones();
      },
      error: () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al cargar archivo JSONL' });
      }
    });
  }

  downloadCsv() {
    this.simulacionService.downloadCsvFile().subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'simulaciones.csv';
      a.click();
      window.URL.revokeObjectURL(url);
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al descargar CSV' });
    });
  }

}
