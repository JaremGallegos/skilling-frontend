import { AsistenciaResponseDTO } from "./asistencia.response";
import { ClaseResponseDTO } from "./clase.response";
import { ExamenResponseDTO } from "./examen.response";
import { MateriaResponseDTO } from "./materia.response";
import { ProfesorResponseDTO } from "./profesor.response";
import { TareaResponseDTO } from "./tarea.response";

export interface LeccionResponseDTO {
  id: number;
  nombre: string;
  dia: string;
  horaInicio: string;
  horaFin: string;
  materiaId: MateriaResponseDTO;
  claseId: ClaseResponseDTO;
  profesorId: ProfesorResponseDTO;
  examenes: ExamenResponseDTO[];
  tareas: TareaResponseDTO[];
  asistencias: AsistenciaResponseDTO[];
}
