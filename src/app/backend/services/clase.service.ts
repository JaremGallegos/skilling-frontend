import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClaseResponseDTO } from '../models/clase.response';
import { Observable } from 'rxjs';
import { ClaseRequestDTO } from '../models/clase.request';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {
  private baseUrl: string = 'http://localhost:8089/api/clases';

  constructor(private http: HttpClient) { }

  getClases(): Observable<ClaseResponseDTO[]> {
    return this.http.get<ClaseResponseDTO[]>(this.baseUrl);
  }

  getClaseById(id: number): Observable<ClaseResponseDTO> {
    return this.http.get<ClaseResponseDTO>(`${this.baseUrl}/${id}`);
  }

  createClase(clase: ClaseRequestDTO): Observable<ClaseResponseDTO> {
    return this.http.post<ClaseResponseDTO>(this.baseUrl, clase);
  }

  updateClase(id: number, clase: ClaseRequestDTO): Observable<ClaseResponseDTO> {
    return this.http.put<ClaseResponseDTO>(`${this.baseUrl}/${id}`, clase);
  }

  deleteClase(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
