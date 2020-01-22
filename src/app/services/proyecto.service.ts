import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  proyectos: Proyecto[] = [];

  constructor() {
    this.deleteLocalStorage();
   }

  create(proyecto: Proyecto) {
    proyecto.id = new Date().getTime();
    this.proyectos.unshift(proyecto);
    this.saveLocalStorage(this.proyectos);
  }

  index() {
    return this.getLocalStorage();
  }

  saveLocalStorage(data) {
    localStorage.setItem('proyectos', JSON.stringify(data));
  }

  deleteLocalStorage() {
    localStorage.clear();
  }

  getLocalStorage() {
    return JSON.parse(localStorage.getItem('proyectos'));

  }
}
