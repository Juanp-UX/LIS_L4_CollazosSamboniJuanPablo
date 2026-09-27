import { Injectable } from '@angular/core';
import { Medico } from '../models/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  private medicos: Medico[] = [
    {
      id: 1,
      nombre: 'Dra. Laura Hernández',
      especialidadClave: 'terapia-neural',
      especialidadNombre: 'Terapia Neural',
      descripcion: 'Regula el sistema nervioso autónomo y alivia el dolor crónico mediante microinyecciones, con 10 años de experiencia.',
      foto: 'img/doc1.png',
      aniosExperiencia: 10
    },
    {
      id: 2,
      nombre: 'Dra. María López',
      especialidadClave: 'quiropraxia',
      especialidadNombre: 'Quiropraxia',
      descripcion: 'Diagnóstico y tratamiento manual de la columna vertebral para mejorar movilidad y postura, con 7 años de experiencia.',
      foto: 'img/doc2.png',
      aniosExperiencia: 7
    },
    {
      id: 3,
      nombre: 'Dra. Sofía Ramírez',
      especialidadClave: 'fisioterapia',
      especialidadNombre: 'Fisioterapia',
      descripcion: 'Rehabilitación física mediante ejercicio terapéutico y técnicas manuales, con 11 años de experiencia.',
      foto: 'img/doc3.png',
      aniosExperiencia: 11
    },
    {
      id: 4,
      nombre: 'Dr. Carlos Martínez',
      especialidadClave: 'nutricion',
      especialidadNombre: 'Nutrición y Dietética Terapéutica',
      descripcion: 'Planes de alimentación personalizados para apoyar tratamientos clínicos y el bienestar del paciente, con 12 años de experiencia.',
      foto: 'img/doc4.png',
      aniosExperiencia: 12
    },
    {
      id: 5,
      nombre: 'Dr. Andrés Rodríguez',
      especialidadClave: 'medicina-general',
      especialidadNombre: 'Medicina General',
      descripcion: 'Atención primaria, evaluación clínica y seguimiento de enfermedades comunes, con 8 años de experiencia.',
      foto: 'img/doc5.png',
      aniosExperiencia: 8
    },
    {
      id: 6,
      nombre: 'Dr. Daniel Gómez',
      especialidadClave: 'pediatria',
      especialidadNombre: 'Pediatría',
      descripcion: 'Orientado al bienestar infantil, la atención preventiva y el seguimiento del desarrollo, con 15 años de experiencia.',
      foto: 'img/doc6.png',
      aniosExperiencia: 15
    }
  ];

  obtenerMedicos(): Medico[] {
    return this.medicos;
  }

  obtenerPorEspecialidad(clave: string): Medico[] {
    return this.medicos.filter(m => m.especialidadClave === clave);
  }
}
