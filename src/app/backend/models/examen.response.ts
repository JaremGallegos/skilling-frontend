import { LeccionResponseDTO } from "./leccion.response";
import { ResultadoResponseDTO } from "./resultado.response";

export interface ExamenResponseDTO {
  id: number;
  titulo: string;
  horaInicio: string;
  horaFin: string;
  leccionId: LeccionResponseDTO;
  resultados: ResultadoResponseDTO[];
}
