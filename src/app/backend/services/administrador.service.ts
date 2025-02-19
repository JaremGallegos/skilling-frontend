import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdministradorResponseDTO } from '../models/administrador.response';
import { Observable } from 'rxjs';
import { AdministradorRequestDTO } from '../models/administrador.request';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  private baseUrl: string = 'http://localhost:8089/api/administradores';

  constructor(private http: HttpClient) { }

  getAdministradores(): Observable<AdministradorResponseDTO[]> {
    return this.http.get<AdministradorResponseDTO[]>(this.baseUrl);
  }

  getAdministradorById(id: string): Observable<AdministradorResponseDTO> {
    return this.http.get<AdministradorResponseDTO>(`${this.baseUrl}/${id}`);
  }

  createAdministrador(admin: AdministradorRequestDTO): Observable<AdministradorResponseDTO> {
    return this.http.post<AdministradorResponseDTO>(this.baseUrl, admin);
  }

  updateAdministrador(id: string, admin: AdministradorRequestDTO): Observable<AdministradorResponseDTO> {
    return this.http.put<AdministradorResponseDTO>(`${this.baseUrl}/${id}`, admin);
  }

  deleteAdministrador(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
