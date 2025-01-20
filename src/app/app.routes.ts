import { Routes } from '@angular/router';
import { AdminComponent } from './features/admin/admin.component';
import { ProfesorComponent } from './features/profesor/profesor.component';
import { EstudianteComponent } from './features/estudiante/estudiante.component';

export const routes: Routes = [
  { path: 'admin', component: AdminComponent, title: 'Admin Page' },
  { path: 'profesor', component: ProfesorComponent, title: 'Profesor Page' },
  { path: 'estudiante', component: EstudianteComponent, title: 'Estudiante Page' },
  { path: '', component: AdminComponent, title: 'Login'}
];
