import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto.model';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-invertir',
  templateUrl: './invertir.component.html',
  styleUrls: ['./invertir.component.css']
})
export class InvertirComponent implements OnInit {

  cash = 20000;
  ariaValuenow = 100;
  invertir: number

  proyectos: Proyecto[] = [];
  total: number;

  constructor(private ps: ProyectoService) { }

  ngOnInit() {
    this.getProyectos();
  }

  getProyectos() {
    this.proyectos = this.ps.index();
  }

  onClick(data) {
    console.log(this.invertir);
    if (this.invertir > data.amount || isNaN(this.invertir)) {
      return;
    }

    this.proyectos.forEach(p => {
      if (data.id = p.id) {
        this.cash = this.cash - this.invertir;
        const percentage = (this.invertir / p.total) * 100;
        console.log(percentage);
        p.amount = p.amount - this.invertir;
        p.percentage = p.percentage - percentage;
      }
    });



  }


}
