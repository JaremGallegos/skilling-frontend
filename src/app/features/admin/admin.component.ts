import { Component } from '@angular/core';
import { UserCardComponent } from "../../core/components/user-card/user-card.component";
import { CountChartComponent } from "../../core/components/count-chart/count-chart.component";
import { AttendanceChartComponent } from "../../core/components/attendance-chart/attendance-chart.component";
import { FinanceChartComponent } from "../../core/components/finance-chart/finance-chart.component";
import { EventCalendarComponentComponent } from "../../core/components/event-calendar-component/event-calendar-component.component";
import { AnnouncementsComponent } from "../../core/components/announcements/announcements.component";

@Component({
  selector: 'app-admin',
  imports: [
    UserCardComponent,
    CountChartComponent,
    AttendanceChartComponent,
    FinanceChartComponent,
    EventCalendarComponentComponent,
    AnnouncementsComponent
],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

}
