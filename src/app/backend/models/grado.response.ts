import { ClaseResponseDTO } from "./clase.response";
import { EstudianteResponseDTO } from "./estudiante.response";

export interface GradoResponseDTO {
  id: number;
  nivel: string;
  estudiantes: EstudianteResponseDTO[];
  clases: ClaseResponseDTO[];
}
