import { Routes } from '@angular/router';
import { Pregunta1Component } from './pregunta-1/pregunta-1.component';
import { Pregunta2Component } from './pregunta-2/pregunta-2.component';

export const routes: Routes = [
    {path :"pregunta1",component : Pregunta1Component},
    {path: "pregunta2", component: Pregunta2Component}
];
