import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SimulacionRequestDTO } from '../models/simulacion.request';
import { SimulacionResponseDTO } from '../models/simulacion.response';

@Injectable({
  providedIn: 'root'
})
export class SimulacionService {
  private baseUrl: string = 'http://localhost:8089/api/simulaciones';

  constructor(private http: HttpClient) { }

  getSimulaciones(): Observable<SimulacionResponseDTO[]> {
    return this.http.get<SimulacionResponseDTO[]>(this.baseUrl);
  }

  getSimulacionById(id: string): Observable<SimulacionResponseDTO> {
    return this.http.get<SimulacionResponseDTO>(`${this.baseUrl}/${id}`);
  }

  createSimulacion(simulacion: SimulacionRequestDTO): Observable<SimulacionResponseDTO> {
    return this.http.post<SimulacionResponseDTO>(this.baseUrl, simulacion);
  }

  updateSimulacion(id: string, simulacion: SimulacionRequestDTO): Observable<SimulacionResponseDTO> {
    return this.http.put<SimulacionResponseDTO>(`${this.baseUrl}/${id}`, simulacion);
  }

  deleteSimulacion(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  processSimulaciones(simulaciones: SimulacionRequestDTO[]): Observable<string> {
    return this.http.post(`${this.baseUrl}/procesar`, simulaciones, { responseType: 'text' });
  }

  uploadSimulacionesFromJsonl(file: File): Observable<SimulacionResponseDTO[]> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<SimulacionResponseDTO[]>(`${this.baseUrl}/jsonl/procesar`, formData);
  }

  downloadCsvFile(): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/descargar`, { responseType: 'blob' });
  }
}
