import { Injectable } from '@angular/core';
import { LoginRequestDTO } from '../models/login.request';
import { Observable } from 'rxjs';
import { LoginResponseDTO } from '../models/login.response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl: string = 'http://localhost:8089/api/auth';

  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequestDTO): Observable<LoginResponseDTO> {
    return this.http.post<LoginResponseDTO>(`${this.baseUrl}/login`, loginRequest);
  }
}
