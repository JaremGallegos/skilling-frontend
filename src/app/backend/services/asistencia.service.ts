import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AsistenciaResponseDTO } from '../models/asistencia.response';
import { AsistenciaRequestDTO } from '../models/asistencia.request';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  private baseUrl: string = 'http://localhost:8089/api/asistencias';

  constructor(private http: HttpClient) { }

  getAsistencias(): Observable<AsistenciaResponseDTO[]> {
    return this.http.get<AsistenciaResponseDTO[]>(this.baseUrl);
  }

  getAsistenciaById(id: number): Observable<AsistenciaResponseDTO> {
    return this.http.get<AsistenciaResponseDTO>(`${this.baseUrl}/${id}`);
  }

  createAsistencia(asistencia: AsistenciaRequestDTO): Observable<AsistenciaResponseDTO> {
    return this.http.post<AsistenciaResponseDTO>(this.baseUrl, asistencia);
  }

  updateAsistencia(id: number, asistencia: AsistenciaRequestDTO): Observable<AsistenciaResponseDTO> {
    return this.http.put<AsistenciaResponseDTO>(`${this.baseUrl}/${id}`, asistencia);
  }

  deleteAsistencia(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
