import { Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { EstudiosComponent } from './components/estudios/estudios.component';

export const routes: Routes = [
    {path: 'about-me', title:'About Me', component: AboutMeComponent},
    {path: 'experiencias', title: 'Experiencias', component: ExperienciasComponent},
    {path: 'estudios', title:'Estudios', component: EstudiosComponent},
];
