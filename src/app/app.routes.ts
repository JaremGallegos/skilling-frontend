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
import { RegisterComponent } from './core/register/register.component';
import { PerfilComponent } from './core/pages/perfil/perfil.component';
import { ConfiguracionComponent } from './core/pages/configuracion/configuracion.component';
import { AuthGuardService } from './backend/services/auth-guard.service';

export const routes: Routes = [
  { path: 'login', component: SignInComponent, title: 'Login'},
  { path: 'register', component: RegisterComponent, title: 'Registrarse'},
  { path: 'admin', component: AdminComponent, title: 'Admin', canActivate: [AuthGuardService] },
  { path: '', component: FeaturesComponent, title: 'Dashboard', canActivate: [AuthGuardService], children: [
    { path: '', component: DashboardComponent, title: 'Inicio' },
    { path: 'profesor', component: ProfesorComponent, title: 'Profesor' },
    { path: 'estudiante', component: EstudianteComponent, title: 'Estudiante' },
    { path: 'asesores', component: AsesorComponent, title: 'Pagina' },
    { path: 'clases', component: ClasesComponent, title: 'Clase' },
    { path: 'cursos', component: CursosComponent, title: 'Cursos' },
    { path: 'examenes', component: ExamenesComponent, title: 'Examenes' },
    { path: 'tareas', component: TareasComponent, title: 'Tareas' },
    { path: 'asistencia', component: AsistenciaComponent, title: 'Asistencia' },
    { path: 'eventos', component: EventosComponent, title: 'Eventos' },
    { path: 'mensajeria', component: MensajeriaComponent, title: 'Mensajeria' },
    { path: 'anuncios', component: AnunciosComponent, title: 'Anuncios' },
    { path: 'perfil', component: PerfilComponent, title: 'Perfil' },
    { path: 'configuracion', component: ConfiguracionComponent, title: 'Configuracion' }
  ]},
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
