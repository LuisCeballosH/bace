import { Component, OnInit, ViewChild } from '@angular/core';
import { ListarProyectosComponent } from '../listar-proyectos/listar-proyectos.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  @ViewChild('appListarProyectos', { static: false }) appListarProyectos: ListarProyectosComponent;

  constructor() { }

  ngOnInit() {
  }

  proyectoCreado() {
    this.appListarProyectos.getProyectos();
  }

}
