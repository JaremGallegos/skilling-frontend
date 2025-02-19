import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RolResponseDTO } from '../models/rol.response';
import { Observable } from 'rxjs';
import { RolRequestDTO } from '../models/rol.request';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  private baseUrl: string = 'http://localhost:8089/api/roles';

  constructor(private http: HttpClient) { }

  getRoles(): Observable<RolResponseDTO[]> {
    return this.http.get<RolResponseDTO[]>(this.baseUrl);
  }

  getRolById(id: number): Observable<RolResponseDTO> {
    return this.http.get<RolResponseDTO>(`${this.baseUrl}/${id}`);
  }

  createRol(rol: RolRequestDTO): Observable<RolResponseDTO> {
    return this.http.post<RolResponseDTO>(this.baseUrl, rol);
  }

  updateRol(id: number, rol: RolRequestDTO): Observable<RolResponseDTO> {
    return this.http.put<RolResponseDTO>(`${this.baseUrl}/${id}`, rol);
  }

  deleteRol(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
