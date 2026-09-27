import { Component } from '@angular/core';

interface PromoSlide {
  imagen: string;
  alt: string;
  titulo: string;
  descripcion: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {

  slides: PromoSlide[] = [
    {
      imagen: 'img/carr1.jpg',
      alt: 'Promoción de medicina general',
      titulo: 'Medicina General',
      descripcion: '20% de descuento en evaluación médica integral.'
    },
    {
      imagen: 'img/carr2.jpg',
      alt: 'Promoción de nutrición y dietética terapéutica',
      titulo: 'Nutrición y Dietética Terapéutica',
      descripcion: 'Primera valoración nutricional con precio especial.'
    },
    {
      imagen: 'img/carr3.jpg',
      alt: 'Promoción de fisioterapia',
      titulo: 'Fisioterapia',
      descripcion: 'Primera sesión de fisioterapia con tarifa promocional.'
    }
  ];

}
