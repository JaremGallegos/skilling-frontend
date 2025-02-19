import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnuncioResponseDTO } from '../models/anuncio.response';
import { Observable } from 'rxjs';
import { AnuncioRequestDTO } from '../models/anuncio.request';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {
  private baseUrl: string = 'http://localhost:8089/api/anuncios';

  constructor(private http: HttpClient) { }

  getAnuncios(): Observable<AnuncioResponseDTO[]> {
    return this.http.get<AnuncioResponseDTO[]>(this.baseUrl);
  }

  getAnuncioById(id: number): Observable<AnuncioResponseDTO> {
    return this.http.get<AnuncioResponseDTO>(`${this.baseUrl}/${id}`);
  }

  createAnuncio(anuncio: AnuncioRequestDTO): Observable<AnuncioResponseDTO> {
    return this.http.post<AnuncioResponseDTO>(this.baseUrl, anuncio);
  }

  updateAnuncio(id: number, anuncio: AnuncioRequestDTO): Observable<AnuncioResponseDTO> {
    return this.http.put<AnuncioResponseDTO>(`${this.baseUrl}/${id}`, anuncio);
  }

  deleteAnuncio(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
