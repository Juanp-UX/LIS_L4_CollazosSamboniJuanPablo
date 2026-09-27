import { Injectable } from '@angular/core';
import { Especialidad } from '../models/especialidad';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  private especialidades: Especialidad[] = [
    {
      clave: 'terapia-neural',
      titulo: 'Terapia neural',
      descripcion:
        'Especialidad que utiliza microinyecciones en puntos específicos para regular el sistema nervioso autónomo, aliviar dolor crónico y mejorar procesos funcionales del organismo.'
    },
    {
      clave: 'quiropraxia',
      titulo: 'Quiropraxia',
      descripcion:
        'Se enfoca en el diagnóstico y tratamiento manual de alteraciones músculo-esqueléticas, especialmente de la columna vertebral, para mejorar movilidad, postura y dolor.'
    },
    {
      clave: 'fisioterapia',
      titulo: 'Fisioterapia',
      descripcion:
        'Especialidad orientada a la prevención y rehabilitación física mediante ejercicio terapéutico, técnicas manuales y agentes físicos para recuperar la función corporal.'
    },
    {
      clave: 'nutricion',
      titulo: 'Nutrición y Dietética Terapéutica',
      descripcion:
        'Diseña planes de alimentación personalizados para apoyar tratamientos clínicos, mejorar hábitos nutricionales y contribuir al bienestar integral del paciente.'
    },
    {
      clave: 'medicina-general',
      titulo: 'Medicina General',
      descripcion:
        'Brinda atención primaria, evaluación clínica inicial, prevención y seguimiento de enfermedades comunes en todas las etapas de la vida.'
    },
    {
      clave: 'pediatria',
      titulo: 'Pediatría',
      descripcion:
        'Atiende la salud infantil desde el nacimiento hasta la adolescencia, con enfoque en desarrollo, prevención, vacunación y tratamiento oportuno.'
    }
  ];

  obtenerEspecialidades(): Especialidad[] {
    return this.especialidades;
  }

  obtenerPorClave(clave: string): Especialidad | undefined {
    return this.especialidades.find(e => e.clave === clave);
  }
}
