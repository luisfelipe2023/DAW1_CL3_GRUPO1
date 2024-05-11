import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta-4',
  templateUrl: './pregunta-4.component.html',
  styleUrls: ['./pregunta-4.component.scss']
})
export class Pregunta4Component {
  numero: number | null = null; // Inicializamos como null para manejar el caso de que no se haya ingresado ningún valor
  sumaDigitos: number = 0;

  constructor() { }

  updateNumero(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement.value.trim();
    this.numero = inputValue ? parseInt(inputValue, 10) : null; // Convertimos el valor a número, o asignamos null si no hay ningún valor
  }

  calcularSumaDigitos() {
    if (this.numero === null) {
      alert('Por favor, ingrese un número válido.');
      return;
    }

    const numeroString = this.numero.toString();

    // Verificar que el número ingresado tenga exactamente 4 dígitos
    if (numeroString.length !== 4) {
      alert('El número debe tener exactamente 4 dígitos.');
      return;
    }

    // Sumar cada dígito del número
    this.sumaDigitos = 0;
    for (let i = 0; i < numeroString.length; i++) {
      this.sumaDigitos += parseInt(numeroString[i]);
    }
  }
}
