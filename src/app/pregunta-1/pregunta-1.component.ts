import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pregunta-1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pregunta-1.component.html',
  styleUrl: './pregunta-1.component.scss'
})
export class Pregunta1Component {
  cantidadLlantas: number = 0;
  precioPorLlantaMenosDe5 = 800;
  precioPorLlanta5OMas = 700;
  totalAPagar: number = 0;

  mostrarResultado = false;

  calcularTotal(): void {
    if (this.cantidadLlantas < 5) {
      this.totalAPagar = this.cantidadLlantas * this.precioPorLlantaMenosDe5;
    } else {
      this.totalAPagar = this.cantidadLlantas * this.precioPorLlanta5OMas;
    }
    this.mostrarResultado = true;
  }
}
