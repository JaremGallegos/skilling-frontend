import { Component, Input } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-attendance-chart',
  imports: [
    ChartModule
  ],
  templateUrl: './attendance-chart.component.html',
  styleUrl: './attendance-chart.component.scss'
})
export class AttendanceChartComponent {
  @Input() nombre: String | undefined = "Unknown";

  data = {
    labels:['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    datasets: [
      { label: ['Asistencia'], data: [9999, 9999, 9999, 9999, 9999, 9999, 9999], backgroundColor: [
        'rgb(75, 192, 192)'
      ]},
      { label: ['Faltas'], data: [9999, 9999, 9999, 9999, 9999, 9999, 9999], backgroundColor: [
        'rgb(75, 142, 191)'
      ]}
    ]
  };

  options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'bottom' },
      tooltop: { enabled: true }
    }
  };
}
