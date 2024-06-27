import { Component } from '@angular/core';
import { EmpleadoInterface } from './models/empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clase-05-comunicacion-componentes';

  empleadosPresentes: EmpleadoInterface[] = [
    {id:1, nombre:"Martin", apellido:"Rodriguez"},
    {id:3, nombre:"Julian", apellido:"Gonzalez"},
  ];

  empleadosAusentes: EmpleadoInterface[] = [
    {id:2, nombre:"Juan", apellido:"Perez"},
    {id:4, nombre:"Agustin", apellido:"Ramirez"},
  ];



  eliminarEmpleado(idEmpleado: number, tipoEmpledo:number){
    console.log("Eliminamos el empleado:" );
    
    if(tipoEmpledo == 1){
      this.empleadosPresentes = this.empleadosPresentes.filter((empleado) => empleado.id != idEmpleado);
    }else{
      this.empleadosAusentes = this.empleadosAusentes.filter((empleado) => empleado.id != idEmpleado);
    }
  }
}
