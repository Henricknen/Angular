import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {
  myNumber: number = 0;   // propriedade

  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber() {
    this.myNumber = Math.floor(Math.random() * 10)    // "logica", trocando o numero 0 por um numero aleatorio gerado pelo 'random'
  }
}
