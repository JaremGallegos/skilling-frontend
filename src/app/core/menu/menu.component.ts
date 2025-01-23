import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';

@Component({
  standalone: true,
  selector: 'app-menu',
  imports: [
    NgFor
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        title: "MENU",
        items: [
          { label: "Inicio", icon: PrimeIcons.HOME, url: "/" },
          { label: "Profesores", icon: PrimeIcons.BRIEFCASE, url: "/profesores" },
          { label: "Estudiantes", icon: PrimeIcons.BOOK, url: "/estudiantes" },
          { label: "Asesores", icon: PrimeIcons.GRADUATION_CAP, url: "/asesores" },
          { label: "Clases", icon: PrimeIcons.GLOBE, url: "/clases" },
          { label: "Cursos", icon: PrimeIcons.ADDRESS_BOOK, url: "/cursos" },
          { label: "Examenes", icon: PrimeIcons.CLIPBOARD, url: "/examenes" },
          { label: "Tareas", icon: PrimeIcons.PAPERCLIP, url: "/tareas" },
          { label: "Asistencia", icon: PrimeIcons.CHECK_CIRCLE, url: "/asistencia" },
          { label: "Eventos", icon: PrimeIcons.CALENDAR_CLOCK, url: "/eventos" },
          { label: "Mensajería", icon: PrimeIcons.SEND, url: "/mensajeria" },
          { label: "Anuncios", icon: PrimeIcons.MEGAPHONE, url: "/anuncios" },
        ]
      },
      {
        title: "OTROS",
        items: [
          { label: "Perfíl", icon: PrimeIcons.USER, url: "/perfil" },
          { label: "Configuración", icon: PrimeIcons.SLIDERS_H, url: "/configuracion" },
          { label: "Salir", icon: PrimeIcons.TIMES, url: "/salir" },
        ],
      },
    ];
  }

}
