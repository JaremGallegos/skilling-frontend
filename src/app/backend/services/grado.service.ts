import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GradoResponseDTO } from '../models/grado.response';
import { Observable } from 'rxjs';
import { GradoRequestDTO } from '../models/grado.request';

@Injectable({
  providedIn: 'root'
})
export class GradoService {
  private baseUrl: string = 'http://localhost:8089/api/grados';
  constructor(private http: HttpClient) { }

  getGrados(): Observable<GradoResponseDTO[]> {
    return this.http.get<GradoResponseDTO[]>(this.baseUrl);
  }

  getGradoById(id: number): Observable<GradoResponseDTO> {
    return this.http.get<GradoResponseDTO>(`${this.baseUrl}/${id}`);
  }

  createGrado(grado: GradoRequestDTO): Observable<GradoResponseDTO> {
    return this.http.post<GradoResponseDTO>(this.baseUrl, grado);
  }

  updateGrado(id: number, grado: GradoRequestDTO): Observable<GradoResponseDTO> {
    return this.http.put<GradoResponseDTO>(`${this.baseUrl}/${id}`, grado);
  }

  deleteGrado(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
