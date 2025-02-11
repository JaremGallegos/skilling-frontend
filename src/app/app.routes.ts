import { Routes } from '@angular/router';
import { AdminComponent } from './features/admin/admin.component';
import { ProfesorComponent } from './features/profesor/profesor.component';
import { EstudianteComponent } from './features/estudiante/estudiante.component';
import { SignInComponent } from './core/sign-in/sign-in.component';
import { FeaturesComponent } from './features/features.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { AsesorComponent } from './features/asesor/asesor.component';
import { ClasesComponent } from './core/pages/clases/clases.component';
import { CursosComponent } from './core/pages/cursos/cursos.component';
import { ExamenesComponent } from './core/pages/examenes/examenes.component';
import { TareasComponent } from './core/pages/tareas/tareas.component';
import { AsistenciaComponent } from './core/pages/asistencia/asistencia.component';
import { EventosComponent } from './core/pages/eventos/eventos.component';
import { MensajeriaComponent } from './core/pages/mensajeria/mensajeria.component';
import { AnunciosComponent } from './core/pages/anuncios/anuncios.component';

export const routes: Routes = [
  { path: 'login', component: SignInComponent, title: 'Login'},
  { path: 'admin', component: AdminComponent, title: 'Admin' },
  { path: '', component: FeaturesComponent, title: 'Dashboard', children: [
    { path: 'dashboard', component: DashboardComponent, title: 'Admin Page' },
    { path: 'estudiante', component: EstudianteComponent, title: 'Estudiante Page' },
    { path: 'profesor', component: ProfesorComponent, title: 'Profesor Page' },
    { path: 'asesores', component: AsesorComponent, title: "Asesores Page" },
    { path: 'clases', component: ClasesComponent, title: "Clase Pagina" },
    { path: 'cursos', component: CursosComponent, title: "Cursos Pagina" },
    { path: 'examenes', component: ExamenesComponent, title: "Examenes Pagina" },
    { path: 'tareas', component: TareasComponent, title: "Tareas Pagina" },
    { path: 'asistencia', component: AsistenciaComponent, title: "Asistencia Pagina" },
    { path: 'eventos', component: EventosComponent, title: "Eventos Pagina" },
    { path: 'mensajeria', component: MensajeriaComponent, title: "Mensajeria Pagina" },
    { path: 'anuncios', component: AnunciosComponent, title: "Anuncios Pagina" }
  ]},
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
