import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  standalone: true,
  selector: 'app-user-card',
  imports: [
    CardModule,
    NgClass
  ],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() colorEven: String | undefined = '#FFFFF';
  @Input() colorOdd: String | undefined = '#FFFFF';
  @Input() subTitle: String | undefined = 'Unknown';
  @Input() data: String | undefined = '999';
  @Input() date: String | undefined = 'Unknown';
  @Input() isOdd: Boolean = true;
}
