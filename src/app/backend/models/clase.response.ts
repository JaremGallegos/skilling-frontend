import { AnuncioResponseDTO } from "./anuncio.response";
import { EstudianteResponseDTO } from "./estudiante.response";
import { EventoResponseDTO } from "./evento.response";
import { GradoResponseDTO } from "./grado.response";
import { LeccionResponseDTO } from "./leccion.response";
import { ProfesorResponseDTO } from "./profesor.response";

export interface ClaseResponseDTO {
  id: number;
  nombre: string;
  capacidad: number;
  gradoId: GradoResponseDTO;
  profesorId: ProfesorResponseDTO;
  lecciones: LeccionResponseDTO[];
  estudiantes: EstudianteResponseDTO[];
  eventos: EventoResponseDTO[];
  anuncios: AnuncioResponseDTO[];
}
