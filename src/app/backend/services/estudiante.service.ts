import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstudianteResponseDTO } from '../models/estudiante.response';
import { Observable } from 'rxjs';
import { EstudianteRequestDTO } from '../models/estudiante.request';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private baseUrl: string = 'http://localhost:8089/api/estudiantes';

  constructor(private http: HttpClient) { }

  getEstudiantes(): Observable<EstudianteResponseDTO[]> {
    return this.http.get<EstudianteResponseDTO[]>(this.baseUrl);
  }

  getEstudianteById(id: string): Observable<EstudianteResponseDTO> {
    return this.http.get<EstudianteResponseDTO>(`${this.baseUrl}/${id}`);
  }

  createEstudiante(estudiante: EstudianteRequestDTO): Observable<EstudianteResponseDTO> {
    return this.http.post<EstudianteResponseDTO>(this.baseUrl, estudiante);
  }

  updateEstudiante(id: string, estudiante: EstudianteRequestDTO): Observable<EstudianteResponseDTO> {
    return this.http.put<EstudianteResponseDTO>(`${this.baseUrl}/${id}`, estudiante);
  }

  deleteEstudiante(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
