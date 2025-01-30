import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterModule,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  isLoginPage: boolean = false;
  isDashboardPage: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      const url = this.router.url
      this.isDashboardPage = url === '/login';
      this.isLoginPage = url.startsWith('/');
    });
  }
}
