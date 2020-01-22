import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  constructor(
    private ps: ProyectoService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const response = this.ps.login(this.user);
    if (response) {
      if (response.role === 'emprendedor') {
        this.router.navigateByUrl('/');
      } else {
        this.router.navigateByUrl('/invertir');
      }
    } else {

    }
    console.log(response);
  }

}
