import { Component } from '@angular/core';
import { EventCalendarComponentComponent } from "../../core/components/event-calendar-component/event-calendar-component.component";
import { AnnouncementsComponent } from "../../core/components/announcements/announcements.component";
import { BigCalendarComponent } from "../../core/components/big-calendar/big-calendar.component";

@Component({
  selector: 'app-estudiante',
  imports: [EventCalendarComponentComponent, AnnouncementsComponent, BigCalendarComponent],
  templateUrl: './estudiante.component.html',
  styleUrl: './estudiante.component.scss'
})
export class EstudianteComponent {

}
