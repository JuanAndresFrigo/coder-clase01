import { Component } from '@angular/core';
import { MATERIA_LISTADO } from 'src/app/contants/listado-alumnos.constant';
import { Evaluacion, Student } from 'src/app/interfaces';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent {
  public nombreMateria: string = MATERIA_LISTADO.nombre;
  public alumnos: Student[] = MATERIA_LISTADO.alumnos.sort(
    (a: Student, b: Student) => a.apellido.localeCompare(b.apellido)
  );
  public evaluaciones: Evaluacion[] = MATERIA_LISTADO.alumnos[0].evaluaciones;

  //Método para pintar las celdas segun condición del alumno
  public getClassCondition(condition: string): string {
    if (condition === 'Aprobado') return 'table-success';
    if (condition === 'Regular') return 'table-warning';
    return 'table-danger';
  }
}
