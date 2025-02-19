import { RolResponseDTO } from "./rol.response";

export interface UsuarioResponseDTO {
  id: string;
  email: string;
  clave: string;
  rolId: RolResponseDTO;
}
