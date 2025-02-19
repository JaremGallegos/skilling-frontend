import { LeccionResponseDTO } from "./leccion.response";

export interface MateriaResponseDTO {
  id: number;
  nombre: string;
  lecciones: LeccionResponseDTO[];
}
