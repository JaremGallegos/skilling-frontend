import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExamenResponseDTO } from '../models/examen.response';
import { Observable } from 'rxjs';
import { ExamenRequestDTO } from '../models/examen.request';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  private baseUrl: string = 'http://localhost:8089/api/examenes';

  constructor(private http: HttpClient) { }

  getExamenes(): Observable<ExamenResponseDTO[]> {
    return this.http.get<ExamenResponseDTO[]>(this.baseUrl);
  }

  getExamenById(id: number): Observable<ExamenResponseDTO> {
    return this.http.get<ExamenResponseDTO>(`${this.baseUrl}/${id}`);
  }

  createExamen(examen: ExamenRequestDTO): Observable<ExamenResponseDTO> {
    return this.http.post<ExamenResponseDTO>(this.baseUrl, examen);
  }

  updateExamen(id: number, examen: ExamenRequestDTO): Observable<ExamenResponseDTO> {
    return this.http.put<ExamenResponseDTO>(`${this.baseUrl}/${id}`, examen);
  }

  deleteExamen(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
