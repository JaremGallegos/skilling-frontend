import { Component, Input } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-finance-chart',
  imports: [
    ChartModule
  ],
  templateUrl: './finance-chart.component.html',
  styleUrl: './finance-chart.component.scss'
})
export class FinanceChartComponent {
  @Input() nombre: String | undefined = "Unknown";

  data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    datasets: [
      { label: ['Ingresos'], data: [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999], backgroundColor: [''] },
      { label: ['Gastos'], data: [900, 900, 900, 900, 900, 900, 900, 900, 900, 900, 900, 900], backgroundColor: [''] }
    ]
  }

  options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
      tooltop: { enabled: true }
    }
  }
}
