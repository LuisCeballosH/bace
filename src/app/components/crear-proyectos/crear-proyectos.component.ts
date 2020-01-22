import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto.model';
import { NgForm } from '@angular/forms';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-crear-proyectos',
  templateUrl: './crear-proyectos.component.html',
  styleUrls: ['./crear-proyectos.component.css']
})
export class CrearProyectosComponent implements OnInit {

  proyecto = new Proyecto();

  @Output() proyectoCreado = new EventEmitter();


  constructor(private ps: ProyectoService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.proyectoCreado.emit();
    if (form.invalid) {
      return;
    }
    this.ps.create(this.proyecto);
  }

}
