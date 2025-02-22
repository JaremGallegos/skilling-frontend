import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventoResponseDTO } from '../models/evento.response';
import { Observable } from 'rxjs';
import { EventoRequestDTO } from '../models/evento.request';
import { NotificacionRequestDTO } from '../models/notificacion.request';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private baseUrl: string = 'http://localhost:8089/api/eventos';

  constructor(private http: HttpClient) { }

  getEventos(): Observable<EventoResponseDTO[]> {
    return this.http.get<EventoResponseDTO[]>(this.baseUrl);
  }

  getEventoById(id: number): Observable<EventoResponseDTO> {
    return this.http.get<EventoResponseDTO>(`${this.baseUrl}/${id}`);
  }

  createEvento(evento: EventoRequestDTO): Observable<EventoResponseDTO> {
    return this.http.post<EventoResponseDTO>(this.baseUrl, evento);
  }

  updateEvento(id: number, evento: EventoRequestDTO): Observable<EventoResponseDTO> {
    return this.http.put<EventoResponseDTO>(`${this.baseUrl}/${id}`, evento);
  }

  deleteEvento(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  enviarNotificacion(notification: NotificacionRequestDTO): Observable<any> {
    return this.http.post(`${this.baseUrl}/enviar`, notification, { responseType: 'text' });
  }
}
