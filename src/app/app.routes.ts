import { Routes } from '@angular/router';
import { Pregunta1Component } from './pregunta-1/pregunta-1.component';
import { Pregunta2Component } from './pregunta-2/pregunta-2.component';
import { Pregunta3Component } from './pregunta-3/pregunta-3.component';
import { Pregunta4Component } from './pregunta-4/pregunta-4.component';

export const routes: Routes = [
    {path :"pregunta1",component : Pregunta1Component},
    {path : "pregunta2", component: Pregunta2Component},
    {path : "pregunta3", component: Pregunta3Component},
    {path : "pregunta4", component: Pregunta4Component}
];