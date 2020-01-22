import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyecto.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  proyectos: any[] = [];

  users: User[] = [
    {
      email: 'emprendedor@emprendedor.com',
      password: '1234',
      role: 'emprendedor'
    },
    {
      email: 'inversor@inversor.com',
      password: '1234',
      role: 'inversor'
    }
  ]

  constructor() {
    this.deleteLocalStorage();
    this.saveLocalStorage('users', this.users);
  }

  create(proyecto: Proyecto) {
    proyecto.id = new Date().getTime();
    proyecto.percentage = 100;
    proyecto.total = proyecto.amount;
    this.proyectos.unshift(proyecto);
    this.saveLocalStorage('proyectos', this.proyectos);
  }

  login(user: User): any {
    const users = this.getUsers()
    const response = users.find(u => {
      return u.email === user.email && u.password === user.password;
    });

    this.saveLocalStorage('user', response);
    return response;
  }



  logout() {
    localStorage.removeItem('user');
  }

  index() {
    return this.getLocalStorage();
  }

  saveLocalStorage(item, data) {
    localStorage.setItem(item, JSON.stringify(data));
  }

  deleteLocalStorage() {
    localStorage.clear();
  }

  

  deleteProyectos() {
    localStorage.removeItem('proyectos');
  }

  getLocalStorage() {
    return JSON.parse(localStorage.getItem('proyectos'));

  }

  getUsers() {
    return JSON.parse(localStorage.getItem('users'));
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}
