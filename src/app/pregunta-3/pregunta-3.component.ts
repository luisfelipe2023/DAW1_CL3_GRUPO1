import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta-3',
  templateUrl: './pregunta-3.component.html',
  styleUrls: ['./pregunta-3.component.scss']
})
export class Pregunta3Component {
  numero: number = 0;
  mensaje: string = '';

  verificarNumeroPerfecto(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const numero = inputElement.valueAsNumber;
    this.numero = numero;
    let sumaDivisores = 0;
    for (let i = 1; i < this.numero; i++) {
      if (this.numero % i === 0) {
        sumaDivisores += i;
      }
    }
    if (sumaDivisores === this.numero) {
      this.mensaje = 'Es perfecto';
    } else {
      this.mensaje = 'No es perfecto';
    }
  }
}
