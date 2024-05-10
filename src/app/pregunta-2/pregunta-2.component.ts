import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pregunta-2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pregunta-2.component.html',
  styleUrl: './pregunta-2.component.scss'
})
export class Pregunta2Component {
  numero: number =0;
  unidades: number = 0;
  decenas: number=0;

  mostrarResultado = false;

  descomponerNumero(): void {
    if (this.numero >= 100 && this.numero <= 999) {
      this.unidades = this.numero % 10;
      this.decenas = Math.floor((this.numero % 100) / 10);
    } else {
      alert("Ingrese un número de 3 cifras!!");
      this.numero = 0;
      this.unidades = 0;
      this.decenas = 0;
    }

    this.mostrarResultado = true;
  }

}
