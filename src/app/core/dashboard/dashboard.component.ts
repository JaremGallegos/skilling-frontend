import { Component } from '@angular/core';
import { CoursesCardComponent } from '../components/courses-card/courses-card.component';
import { DatePickerModule } from 'primeng/datepicker';
import { ResourcesCardComponent } from '../components/resources-card/resources-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [
    CoursesCardComponent,
    ResourcesCardComponent,
    DatePickerModule,
    FormsModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  date: Date = new Date();
}
