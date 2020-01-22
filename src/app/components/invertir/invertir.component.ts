import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto.model';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-invertir',
  templateUrl: './invertir.component.html',
  styleUrls: ['./invertir.component.css']
})
export class InvertirComponent implements OnInit {

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
