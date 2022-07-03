import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Luis Henrique S. F';     // criando uma propriedade
  age: number = 30;
  formation = 'Análise e desenvolvimento de sistemas';
  courses = ["Técnico em informatica para internet", " Técnico de eletroeletronica", " Programador Front End", " Lógica de programação"];

  constructor() { }

  ngOnInit(): void {
  }

}
