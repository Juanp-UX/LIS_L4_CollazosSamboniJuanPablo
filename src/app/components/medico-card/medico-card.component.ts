import { Component, Input } from '@angular/core';
import { Medico } from '../../models/medico';

@Component({
  selector: 'app-medico-card',
  standalone: true,
  imports: [],
  templateUrl: './medico-card.component.html',
  styleUrl: './medico-card.component.css'
})
export class MedicoCardComponent {
  @Input({ required: true }) medico!: Medico;
}
