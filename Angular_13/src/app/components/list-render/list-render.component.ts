import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals = [   // lista de animais "propriedade"
    { name: 'Fred', type: 'Cachorro'},
    { name: 'kiara', type: 'Gato'},
    { name: 'Luke', type: 'Cachorro'},
    { name: 'Bob', type: 'Cavalo'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
