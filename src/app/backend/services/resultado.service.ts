import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResultadoResponseDTO } from '../models/resultado.response';
import { Observable } from 'rxjs';
import { ResultadoRequestDTO } from '../models/resultado.request';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {
  private baseUrl: string = 'http://localhost:8089/api/resultados';

  constructor(private http: HttpClient) { }

  getResultados(): Observable<ResultadoResponseDTO[]> {
    return this.http.get<ResultadoResponseDTO[]>(this.baseUrl);
  }

  getResultadoById(id: number): Observable<ResultadoResponseDTO> {
    return this.http.get<ResultadoResponseDTO>(`${this.baseUrl}/${id}`);
  }

  createResultado(resultado: ResultadoRequestDTO): Observable<ResultadoResponseDTO> {
    return this.http.post<ResultadoResponseDTO>(this.baseUrl, resultado);
  }

  updateResultado(id: number, resultado: ResultadoRequestDTO): Observable<ResultadoResponseDTO> {
    return this.http.put<ResultadoResponseDTO>(`${this.baseUrl}/${id}`, resultado);
  }

  deleteResultado(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
