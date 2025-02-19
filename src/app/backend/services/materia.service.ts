import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MateriaResponseDTO } from '../models/materia.response';
import { Observable } from 'rxjs';
import { MateriaRequestDTO } from '../models/materia.request';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  private baseUrl: string = 'http://localhost:8089/api/materias';

  constructor(private http: HttpClient) { }

  getMaterias(): Observable<MateriaResponseDTO[]> {
    return this.http.get<MateriaResponseDTO[]>(this.baseUrl);
  }

  getMateriaById(id: number): Observable<MateriaResponseDTO> {
    return this.http.get<MateriaResponseDTO>(`${this.baseUrl}/${id}`);
  }

  createMateria(materia: MateriaRequestDTO): Observable<MateriaResponseDTO> {
    return this.http.post<MateriaResponseDTO>(this.baseUrl, materia);
  }

  updateMateria(id: number, materia: MateriaRequestDTO): Observable<MateriaResponseDTO> {
    return this.http.put<MateriaResponseDTO>(`${this.baseUrl}/${id}`, materia);
  }

  deleteMateria(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
