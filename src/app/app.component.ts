import { Component } from '@angular/core';
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { RouterModule, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    ScheduleModule,
    RecurrenceEditorModule,
    HttpClientModule,
    RouterModule,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  isLoginPage: boolean = false;
  isDashboardPage: boolean = false;
  title: String = "Skilling";

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      const url = this.router.url
      this.isDashboardPage = url === '/login';
      this.isLoginPage = url.startsWith('/');
    });
  }
}
