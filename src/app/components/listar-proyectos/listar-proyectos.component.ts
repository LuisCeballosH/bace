import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Proyecto } from 'src/app/models/proyecto.model';

@Component({
  selector: 'app-listar-proyectos',
  templateUrl: './listar-proyectos.component.html',
  styleUrls: ['./listar-proyectos.component.css']
})
export class ListarProyectosComponent implements OnInit {

  proyectos: Proyecto[] = [];
  total: number;

  constructor(private ps: ProyectoService) { }

  ngOnInit() {
    this.getProyectos();
  }

  getProyectos() {
    this.proyectos = this.ps.index();
  }

}
