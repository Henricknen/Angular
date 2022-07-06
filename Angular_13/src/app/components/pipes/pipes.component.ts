import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  someText = 'PIPE OPERATOR';

  today = new Date();   // objeto de data, gera uma data atual

  constructor() { }

  ngOnInit(): void {
  }

}
