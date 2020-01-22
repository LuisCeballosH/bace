import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

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
