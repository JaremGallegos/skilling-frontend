import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenuComponent } from '../core/menu/menu.component';
import { NavbarComponent } from "../core/navbar/navbar.component";

@Component({
  standalone: true,
  selector: 'app-features',
  imports: [
    RouterModule,
    ButtonModule,
    MenuComponent,
    NavbarComponent
  ],
  template: `<router-outlet></router-outlet>`,
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {

}
