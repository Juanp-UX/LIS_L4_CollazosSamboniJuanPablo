import { Component } from '@angular/core';
import { MedicoCardComponent } from '../medico-card/medico-card.component';
import { Especialidad } from '../../models/especialidad';
import { Medico } from '../../models/medico';
import { EspecialidadesService } from '../../services/especialidades.service';
import { MedicosService } from '../../services/medicos.service';

@Component({
  selector: 'app-especialidades',
  standalone: true,
  imports: [MedicoCardComponent],
  templateUrl: './especialidades.component.html',
  styleUrl: './especialidades.component.css'
})
export class EspecialidadesComponent {

  especialidades: Especialidad[] = [];
  medicos: Medico[] = [];

  especialidadSeleccionada!: Especialidad;

  constructor(
    private especialidadesService: EspecialidadesService,
    private medicosService: MedicosService
  ) {
    this.especialidades = this.especialidadesService.obtenerEspecialidades();
    this.medicos = this.medicosService.obtenerMedicos();
    this.especialidadSeleccionada = this.especialidades[0];
  }

  seleccionarEspecialidad(especialidad: Especialidad): void {
    this.especialidadSeleccionada = especialidad;
  }

  esActiva(especialidad: Especialidad): boolean {
    return especialidad.clave === this.especialidadSeleccionada.clave;
  }
}
