import { Component } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { UserCardComponent } from '../components/user-card/user-card.component';
import { CountChartComponent } from '../components/count-chart/count-chart.component';
import { AttendanceChartComponent } from '../components/attendance-chart/attendance-chart.component';
import { FinanceChartComponent } from '../components/finance-chart/finance-chart.component';
import { EventCalendarComponentComponent } from '../components/event-calendar-component/event-calendar-component.component';
import { AnnouncementsComponent } from '../components/announcements/announcements.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    DatePickerModule,
    FormsModule,
    UserCardComponent,
    CountChartComponent,
    AttendanceChartComponent,
    FinanceChartComponent,
    EventCalendarComponentComponent,
    AnnouncementsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  date: Date = new Date();
}
