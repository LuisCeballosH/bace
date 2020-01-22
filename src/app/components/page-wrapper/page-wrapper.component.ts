import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.css']
})
export class PageWrapperComponent implements OnInit {

  user: User;
  constructor(private ps: ProyectoService) { }

  ngOnInit() {
    this.user = this.ps.getUser();
  }

  get isEmprendedor() {
    return this.user && this.user.role === 'emprendedor';
  }

  get isInversor() {
    return this.user && this.user.role === 'inversor';
  }
}
