import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [   // tipando como um array "lista" de animais
    { name: 'Fred', type: 'Cachorro', age: 7},
    { name: 'kiara', type: 'Gato', age: 3},       // lista de animais "propriedade"
    { name: 'Luke', type: 'Cachorro', age: 10},
    { name: 'Bob', type: 'Cavalo', age: 1},
  ];

  animal: Animal = {
    name: 'Tete',
    type: 'Alguma coisa',
    age: 10,
  }

  animalDetails = ''

  constructor() { }

  ngOnInit(): void { }

  showAge (animal: Animal) {        // metodo que recebe um animal
    this.animalDetails = `O animal ${animal.name} tem ${animal.age} anos`;
  }

}
