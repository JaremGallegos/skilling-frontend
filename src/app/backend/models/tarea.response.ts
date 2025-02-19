import { LeccionResponseDTO } from "./leccion.response";
import { ResultadoResponseDTO } from "./resultado.response";

export interface TareaResponseDTO {
  id: number;
  titulo: string;
  fechaInicio: string;
  fechaEntrega: string;
  leccionId: LeccionResponseDTO;
  resultados: ResultadoResponseDTO[];
}
