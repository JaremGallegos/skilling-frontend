import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideFlatpickrDefaults } from 'angularx-flatpickr';
import { DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

bootstrapApplication(AppComponent, {
  providers: [
    // Proveedores para testing y enrutamiento
    provideProtractorTestingSupport(),
    provideRouter(routes),
    provideAnimations(),

    // Configuración de CalendarModule con DateAdapter
    {
      provide: DateAdapter,
      useFactory: adapterFactory,
    },

    // Configuración de Flatpickr
    provideFlatpickrDefaults({
      locale: 'es',
      enableTime: true,
      dateFormat: 'Y-m-d H:i',
    }),
  ],
}).catch((err) => console.error(err));
