import { Materia } from "../interfaces";

export const MATERIA_LISTADO: Materia = {
  nombre: 'Matemáticas',
  alumnos: [
    {
      nombre: 'Juan Carlos',
      apellido: 'Flores',
      evaluaciones: [
        { nombre: 'Evaluación 1', nota: 5 },
        { nombre: 'Evaluación 2', nota: 9 },
        { nombre: 'Evaluación 3', nota: 7 },
      ],
      condicion: 'Aprobado',
    },
    {
      nombre: 'Maria Cecilia',
      apellido: 'Gomez',
      evaluaciones: [
        { nombre: 'Evaluación 1', nota: 6 },
        { nombre: 'Evaluación 2', nota: 6 },
        { nombre: 'Evaluación 3', nota: 6 },
      ],
      condicion: 'Regular',
    },
    {
      nombre: 'Pedro',
      apellido: 'Benetti',
      evaluaciones: [
        { nombre: 'Evaluación 1', nota: 8 },
        { nombre: 'Evaluación 2', nota: 9 },
        { nombre: 'Evaluación 3', nota: 7 },
      ],
      condicion: 'Aprobado',
    },
    {
      nombre: 'Florencia',
      apellido: 'Sosa',
      evaluaciones: [
        { nombre: 'Evaluación 1', nota: 3 },
        { nombre: 'Evaluación 2', nota: 4 },
        { nombre: 'Evaluación 3', nota: 2 },
      ],
      condicion: 'Desaprobado',
    },
    {
      nombre: 'Carlos',
      apellido: 'Perez',
      evaluaciones: [
        { nombre: 'Evaluación 1', nota: 10 },
        { nombre: 'Evaluación 2', nota: 7 },
        { nombre: 'Evaluación 3', nota: 10 },
      ],
      condicion: 'Aprobado',
    },
  ],
};
