import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TareaResponseDTO } from '../models/tarea.response';
import { Observable } from 'rxjs';
import { TareaRequestDTO } from '../models/tarea.request';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private baseUrl: string = 'http://localhost:8089/api/tareas';

  constructor(private http: HttpClient) { }

  getTareas(): Observable<TareaResponseDTO[]> {
    return this.http.get<TareaResponseDTO[]>(this.baseUrl);
  }

  getTareaById(id: number): Observable<TareaResponseDTO> {
    return this.http.get<TareaResponseDTO>(`${this.baseUrl}/${id}`);
  }

  createTarea(tarea: TareaRequestDTO): Observable<TareaResponseDTO> {
    return this.http.post<TareaResponseDTO>(this.baseUrl, tarea);
  }

  updateTarea(id: number, tarea: TareaRequestDTO): Observable<TareaResponseDTO> {
    return this.http.put<TareaResponseDTO>(`${this.baseUrl}/${id}`, tarea);
  }

  deleteTarea(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
