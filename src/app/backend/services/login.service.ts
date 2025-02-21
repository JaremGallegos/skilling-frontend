import { Injectable } from '@angular/core';
import { LoginRequestDTO } from '../models/login.request';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { LoginResponseDTO } from '../models/login.response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedInSubject: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    this.loggedInSubject = new BehaviorSubject<boolean>(false);
  }

  isLoggedIn(): boolean {
    return this.loggedInSubject.value;
  }

  get isLoggedIn$(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }

  login(credentials: { email: string; clave: string }): Observable<LoginResponseDTO> {
      return this.http.post<LoginResponseDTO>('http://localhost:8089/api/auth/login', credentials)
        .pipe(
          tap(response => {
            if (response && response.message === '1') {
              this.loggedInSubject.next(true);
            } else {
              this.loggedInSubject.next(false);
            }
          }),
          catchError(error => {
            console.error('Error en login:', error);
            this.loggedInSubject.next(false)
            return throwError(() => error);
          })
        );
  }

  logout(): void {
    this.loggedInSubject.next(false);
  }
}
