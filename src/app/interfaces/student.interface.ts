import { Evaluacion } from './evaluacion.interface';

export interface Student {
  nombre: string;
  apellido: string;
  evaluaciones: Evaluacion[];
  condicion: string;
}
