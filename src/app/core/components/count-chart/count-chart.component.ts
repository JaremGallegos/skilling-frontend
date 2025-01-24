import { Component, Input } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  standalone: true,
  selector: 'app-count-chart',
  imports: [
    ChartModule
  ],
  templateUrl: './count-chart.component.html',
  styleUrl: './count-chart.component.scss'
})
export class CountChartComponent {
  @Input() nombre: String | undefined = 'Unknown';
  total: Number | undefined = 9999;
  sex: String[] | undefined = ["Chicas", "Chicos"];
  porcentaje: Number | undefined = 99

  data = {
    labels: ['Chicas', 'Chicos'],
    datasets: [
      { label: 'Dataset', data: [9999, 9999], backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)'
      ],
      hoverOffset: 4},
    ]
  };

  options = {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  };
}
