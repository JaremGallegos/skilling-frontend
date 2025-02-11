import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resources-card',
  imports: [
    CommonModule
  ],
  templateUrl: './resources-card.component.html',
  styleUrl: './resources-card.component.scss'
})
export class ResourcesCardComponent {
  resources = [
    { name: 'Documento 1', size: '2 MB', type: 'fig' },
    { name: 'Documento 2', size: '3 MB', type: 'png' },
    { name: 'Documento 3', size: '1.5MB', type: 'pdf' }
  ]
}
