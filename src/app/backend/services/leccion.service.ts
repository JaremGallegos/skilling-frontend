import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LeccionResponseDTO } from '../models/leccion.response';
import { Observable } from 'rxjs';
import { LeccionRequestDTO } from '../models/leccion.request';

@Injectable({
  providedIn: 'root'
})
export class LeccionService {
  private baseUrl: string = 'http://localhost:8089/api/lecciones';

  constructor(private http: HttpClient) { }

  getLecciones(): Observable<LeccionResponseDTO[]> {
    return this.http.get<LeccionResponseDTO[]>(this.baseUrl);
  }

  getLeccionById(id: number): Observable<LeccionResponseDTO> {
    return this.http.get<LeccionResponseDTO>(`${this.baseUrl}/${id}`);
  }

  createLeccion(leccion: LeccionRequestDTO): Observable<LeccionResponseDTO> {
    return this.http.post<LeccionResponseDTO>(this.baseUrl, leccion);
  }

  updateLeccion(id: number, leccion: LeccionRequestDTO): Observable<LeccionResponseDTO> {
    return this.http.put<LeccionResponseDTO>(`${this.baseUrl}/${id}`, leccion);
  }

  deleteLeccion(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
