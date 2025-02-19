import { ClaseResponseDTO } from "./clase.response";
import { GradoResponseDTO } from "./grado.response";
import { UsuarioResponseDTO } from "./usuario.response";

export interface EstudianteResponseDTO {
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
  gradoId: GradoResponseDTO;
  claseId: ClaseResponseDTO;
  usuarioId: UsuarioResponseDTO;
}
