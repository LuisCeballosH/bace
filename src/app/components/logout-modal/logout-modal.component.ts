import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.css']
})
export class LogoutModalComponent implements OnInit {

  constructor(
    private ps: ProyectoService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClick() {
    this.ps.logout();
    this.router.navigateByUrl('/login');
  }

}
