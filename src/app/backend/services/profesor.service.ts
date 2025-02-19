import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfesorResponseDTO } from '../models/profesor.response';
import { Observable } from 'rxjs';
import { ProfesorRequestDTO } from '../models/profesor.request';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  private baseUrl: string = 'http://localhost:8089/api/profesores';

  constructor(private http: HttpClient) { }

  getProfesores(): Observable<ProfesorResponseDTO[]> {
    return this.http.get<ProfesorResponseDTO[]>(this.baseUrl);
  }

  getProfesorById(id: string): Observable<ProfesorResponseDTO> {
    return this.http.get<ProfesorResponseDTO>(`${this.baseUrl}/${id}`);
  }

  createProfesor(profesor: ProfesorRequestDTO): Observable<ProfesorResponseDTO> {
    return this.http.post<ProfesorResponseDTO>(this.baseUrl, profesor);
  }

  updateProfesor(id: string, profesor: ProfesorRequestDTO): Observable<ProfesorResponseDTO> {
    return this.http.put<ProfesorResponseDTO>(`${this.baseUrl}/${id}`, profesor);
  }

  deleteProfesor(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
