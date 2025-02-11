import { Component } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ImageModule } from 'primeng/image'
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [
    IconFieldModule,
    InputIconModule,
    ImageModule,
    AutoCompleteModule,
    FormsModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  providers: [
    { provide: 'sourceFiles', useValue: { files: [] } }
  ]
})
export class NavbarComponent {
  value: String = '';
  items: string[] = [];
  search (event: any) {
    const query = event.query.toLowerCase();
    const allItems = ['Angular', 'React', 'Vue', 'Svelte', 'Ember', 'Backbone'];
    this.items = allItems.filter(item => item.toLowerCase().includes(query));
  }

}
