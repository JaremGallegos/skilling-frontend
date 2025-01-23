import { Routes } from '@angular/router';
import { AdminComponent } from './features/admin/admin.component';
import { ProfesorComponent } from './features/profesor/profesor.component';
import { EstudianteComponent } from './features/estudiante/estudiante.component';
import { SignInComponent } from './core/sign-in/sign-in.component';
import { FeaturesComponent } from './features/features.component';

export const routes: Routes = [
  { path: 'login', component: SignInComponent, title: 'Login'},
  { path: '', component: FeaturesComponent, title: 'Dashboard', children: [
    { path: 'admin', component: AdminComponent, title: 'Admin Page' },
    { path: 'estudiante', component: EstudianteComponent, title: 'Estudiante Page' },
    { path: 'profesor', component: ProfesorComponent, title: 'Profesor Page' },
  ],},
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
