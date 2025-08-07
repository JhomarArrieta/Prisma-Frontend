export interface Usuario {
    id?: number;
    primer_nombre: string;
    segundo_nombre?: string;
    primer_apellido: string;
    segundo_apellido?: string;
    ubicacion: string;
    email: string;
    contrasena: string;
    administrador?: boolean;
    fecha_nacimiento: Date;
}

export interface UsuarioDTO {
    id?: number;
    primer_nombre: string;
    segundo_nombre?: string;
    primer_apellido: string;
    segundo_apellido?: string;
    ubicacion: string;
    email: string;
    contrasena: string;
    administrador?: boolean;
    fecha_nacimiento: Date;
}
