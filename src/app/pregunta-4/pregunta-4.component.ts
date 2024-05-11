import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta-4',
  templateUrl: './pregunta-4.component.html',
  styleUrls: ['./pregunta-4.component.scss']
})
export class Pregunta4Component {
  numero: number | null = null; 
  sumaDigitos: number = 0;

  constructor() { }

  updateNumero(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value.trim();
    this.numero = inputValue ? parseInt(inputValue, 10) : null; 
  }

  calcularSumaDigitos() {
    if (this.numero === null) {
      alert('Por favor, ingrese un número válido.');
      return;
    }

    const numeroString = this.numero.toString();

    if (numeroString.length !== 4) {
      alert('El número debe tener exactamente 4 dígitos.');
      return;
    }
//IMPLEMENTACIÓN DE LA SUMA DE DÍGITOS
    this.sumaDigitos = 0;
    for (let i = 0; i < numeroString.length; i++) {
      this.sumaDigitos += parseInt(numeroString[i]);
    }
  }
}
