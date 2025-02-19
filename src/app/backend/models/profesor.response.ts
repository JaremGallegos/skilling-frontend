import { ClaseResponseDTO } from "./clase.response";
import { LeccionResponseDTO } from "./leccion.response";
import { UsuarioResponseDTO } from "./usuario.response";

export interface ProfesorResponseDTO {
  id: string;
  usuario: string;
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  direccion: string;
  imagen: string;
  sexo: string;
  fechaCreacion: string;
  fechaNacimiento: string;
  usuarioId: UsuarioResponseDTO;
  lecciones: LeccionResponseDTO[];
  clases: ClaseResponseDTO[];
}
