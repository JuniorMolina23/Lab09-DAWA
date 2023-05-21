import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
})
export class TareasComponent implements OnInit {
  tareas: string[] = [];

  ngOnInit() {
    this.tareas = ['Tarea 1', 'Tarea 2', 'Tarea 3', 'Tarea 4'];
  }
}

