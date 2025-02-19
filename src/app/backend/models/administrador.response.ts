import { UsuarioResponseDTO } from "./usuario.response";

export interface AdministradorResponseDTO {
  id: string;
  usuario: string;
  usuarioId: UsuarioResponseDTO;
}
