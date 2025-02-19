import { EstudianteResponseDTO } from "./estudiante.response";
import { ExamenResponseDTO } from "./examen.response";
import { TareaResponseDTO } from "./tarea.response";

export interface ResultadoResponseDTO {
  id: number;
  puntaje: number;
  examenId: ExamenResponseDTO;
  tareaId: TareaResponseDTO;
  estudianteId: EstudianteResponseDTO;
}
