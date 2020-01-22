import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto.model';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input() p: Proyecto;
  @Output() subtraction = new EventEmitter<number>();
  ariaValuenow = 100;
  invertir: number

  proyectos: Proyecto[] = [];
  total: number;

  constructor(private ps: ProyectoService) { }

  ngOnInit() {
    this.proyectos = this.ps.index();
  }

  onClick() {
    if (this.invertir > this.p.amount || isNaN(this.invertir)) {
      return;
    }
    const percentage = (this.invertir / this.p.total) * 100;
    this.p.amount = this.p.amount - this.invertir;
    this.p.percentage = this.p.percentage - percentage;
    this.subtraction.emit(this.invertir);

    this.proyectos.forEach(p => {
      if (p.id === this.p.id) {
        p.amount = p.amount - this.invertir;
        p.percentage = p.percentage - percentage;
      }
    });

    console.log(this.proyectos);
    this.ps.proyectos = this.proyectos;
    this.ps.saveLocalStorage('proyectos', this.proyectos)
  }

}
