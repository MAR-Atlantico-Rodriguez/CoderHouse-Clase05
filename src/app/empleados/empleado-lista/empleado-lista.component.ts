import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmpleadoInterface } from '../../models/empleado';

@Component({
  selector: 'app-empleado-lista',
  templateUrl: './empleado-lista.component.html',
  styleUrl: './empleado-lista.component.scss'
})
export class EmpleadoListaComponent {

  @Input() data: EmpleadoInterface[] = [];

  @Output() eliminarEmpleado = new EventEmitter();

  

}
