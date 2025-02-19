import { EstudianteResponseDTO } from "./estudiante.response";
import { LeccionResponseDTO } from "./leccion.response";

export interface AsistenciaResponseDTO {
  id: number;
  fecha: string;
  presente: string;
  estudianteId: EstudianteResponseDTO;
  leccionId: LeccionResponseDTO;
}
