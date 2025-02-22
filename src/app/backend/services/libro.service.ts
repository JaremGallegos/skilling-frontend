import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LibroResponseDTO } from '../models/libro.response';
import { Observable } from 'rxjs';
import { LibroRequestDTO } from '../models/libro.request';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private baseUrl: string = 'http://localhost:8089/api/libros';

  constructor(private http: HttpClient) { }

  getLibros(): Observable<LibroResponseDTO[]> {
    return this.http.get<LibroResponseDTO[]>(this.baseUrl);
  }

  getLibroById(id: string): Observable<LibroResponseDTO> {
    return this.http.get<LibroResponseDTO>(`${this.baseUrl}/${id}`);
  }

  createLibro(libro: LibroRequestDTO): Observable<LibroResponseDTO> {
    return this.http.post<LibroResponseDTO>(this.baseUrl, libro);
  }

  updateLibro(id: string, libro: LibroRequestDTO): Observable<LibroResponseDTO> {
    return this.http.put<LibroResponseDTO>(`${this.baseUrl}/${id}`, libro);
  }

  deleteLibro(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  uploadLibros(file: File): Observable<LibroResponseDTO[]> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<LibroResponseDTO[]>(`${this.baseUrl}/cargar`, formData);
  }
}
