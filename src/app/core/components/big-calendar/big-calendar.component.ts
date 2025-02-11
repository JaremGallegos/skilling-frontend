import { Component } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService, EventSettingsModel, ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { extend } from '@syncfusion/ej2-base';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { scheduleData } from '../../../../lib/scheduleData';

@Component({
  standalone: true,
  selector: 'app-big-calendar',
  templateUrl: './big-calendar.component.html',
  styleUrls: ['./big-calendar.component.scss'],
  imports: [
    ScheduleModule,
    DatePickerModule
  ],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    ResizeService,
    DragAndDropService
  ]
})
export class BigCalendarComponent  {
  public selectedDate: Date = new Date(2021, 0, 10);
  public eventSettings: EventSettingsModel = {
    dataSource: extend([], scheduleData, {}, true) as Record <string, any>[]
  };
}
