import { ClaseResponseDTO } from "./clase.response";

export interface AnuncioResponseDTO {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string;
  claseId: ClaseResponseDTO;
}
