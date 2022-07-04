import { Component, OnInit, Input } from '@angular/core';  // chamando outro modulo 'Input' da biblioteca geral do angular

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  @Input() name: string = '';   // inicialização com operador de atribuição
  @Input() userData!: {email: string, role: string}   // inicializando o objeto '!'

  constructor() { }

  ngOnInit(): void {
  }

}
