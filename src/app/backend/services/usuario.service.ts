import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioResponseDTO } from '../models/usuario.response';
import { HttpClient } from '@angular/common/http';
import { UsuarioRequestDTO } from '../models/usuario.request';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl: string = 'http://localhost:8089/api/usuarios';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<UsuarioResponseDTO[]> {
    return this.http.get<UsuarioResponseDTO[]>(this.baseUrl);
  }

  getUsuarioById(id: string): Observable<UsuarioResponseDTO> {
    return this.http.get<UsuarioResponseDTO>(`${this.baseUrl}/${id}`);
  }

  createUsuario(usuario: UsuarioRequestDTO): Observable<UsuarioResponseDTO> {
    return this.http.post<UsuarioResponseDTO>(this.baseUrl, usuario);
  }

  updateUsuario(id: string, usuario: UsuarioRequestDTO): Observable<UsuarioResponseDTO> {
    return this.http.put<UsuarioResponseDTO>(`${this.baseUrl}/${id}`, usuario);
  }

  deleteUsuario(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
