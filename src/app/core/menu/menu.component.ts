import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { role } from '../../../lib/data';

@Component({
  standalone: true,
  selector: 'app-menu',
  imports: [
    NgFor,
    NgIf
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];
  private userRole: string = role;

  ngOnInit() {
    this.menuItems = [
      {
        title: "MENU",
        items: [
          { label: "Inicio", icon: PrimeIcons.HOME, url: " ", allowRoles: ["admin", "profesor", "estudiante"] },
          { label: "Profesores", icon: PrimeIcons.BRIEFCASE, url: "/profesor", allowRoles: ["admin", "profesor"] },
          { label: "Estudiantes", icon: PrimeIcons.BOOK, url: "/estudiante", allowRoles: ["admin", "profesor"] },
          { label: "Asesores", icon: PrimeIcons.GRADUATION_CAP, url: "/asesores", allowRoles: ["admin"] },
          { label: "Clases", icon: PrimeIcons.GLOBE, url: "/clases", allowRoles: ["admin", "profesor"] },
          { label: "Cursos", icon: PrimeIcons.ADDRESS_BOOK, url: "/cursos", allowRoles: ["admin", "profesor"] },
          { label: "Examenes", icon: PrimeIcons.CLIPBOARD, url: "/examenes", allowRoles: ["admin", "profesor", "estudiante"] },
          { label: "Tareas", icon: PrimeIcons.PAPERCLIP, url: "/tareas", allowRoles: ["admin", "profesor", "estudiante"] },
          { label: "Asistencia", icon: PrimeIcons.CHECK_CIRCLE, url: "/asistencia", allowRoles: ["admin", "profesor", "estudiante"] },
          { label: "Eventos", icon: PrimeIcons.CALENDAR_CLOCK, url: "/eventos", allowRoles: ["admin", "profesor", "estudiante"] },
          { label: "Mensajería", icon: PrimeIcons.SEND, url: "/mensajeria", allowRoles: ["admin", "profesor", "estudiante"] },
          { label: "Anuncios", icon: PrimeIcons.MEGAPHONE, url: "/anuncios", allowRoles: ["admin", "profesor", "estudiante"] },
        ]
      },
      {
        title: "OTROS",
        items: [
          { label: "Perfíl", icon: PrimeIcons.USER, url: "/perfil", allowRoles: ["admin", "profesor", "estudiante"] },
          { label: "Configuración", icon: PrimeIcons.SLIDERS_H, url: "/configuracion", allowRoles: ["admin", "profesor", "estudiante"] },
          { label: "Salir", icon: PrimeIcons.TIMES, url: "/login", allowRoles:["admin", "profesor", "estudiante"] },
        ],
      },
    ];

    this.menuItems.forEach(menu => {
      menu.items?.forEach(item => {
        item.visible = item["allowRoles"] ? item["allowRoles"].includes(this.userRole) : true;
      })
    })
  }
}
