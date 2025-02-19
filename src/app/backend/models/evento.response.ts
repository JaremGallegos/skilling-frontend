import { ClaseResponseDTO } from "./clase.response";

export interface EventoResponseDTO {
  id: number;
  titulo: string;
  descripcion: string;
  horaInicio: string;
  horaFin: string;
  claseId: ClaseResponseDTO;
}
