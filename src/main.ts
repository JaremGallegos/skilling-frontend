import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideFlatpickrDefaults } from 'angularx-flatpickr';
import { DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideProtractorTestingSupport(),
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    provideAnimations(),
    {
      provide: DateAdapter,
      useFactory: adapterFactory,
    },
    provideFlatpickrDefaults({
      locale: 'es',
      enableTime: true,
      dateFormat: 'Y-m-d H:i',
    }),
  ],
}).catch((err) => console.error(err));
