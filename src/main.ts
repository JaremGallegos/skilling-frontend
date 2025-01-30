import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

bootstrapApplication(AppComponent, {
  providers: [provideProtractorTestingSupport(), provideRouter(routes), provideAnimations(), CalendarModule.forRoot({
    provide: DateAdapter,
    useFactory: adapterFactory,
  }),],
}).catch((err) => console.error(err));
