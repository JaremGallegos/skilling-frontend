import { Component } from '@angular/core';
import { DatePickerModule } from 'primeng/datepicker';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-event-calendar-component',
  imports: [
    DatePickerModule,
    FormsModule,
    NgFor
  ],
  templateUrl: './event-calendar-component.component.html',
  styleUrl: './event-calendar-component.component.scss'
})
export class EventCalendarComponentComponent {
  date: Date = new Date();

  events = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adpiscing elit."
    },
    {
      id: 2,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: 3,
      title: "Lorem ipsum dolor",
      time: "12::00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adispiscing elit."
    }
  ];
}
