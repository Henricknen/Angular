import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';  // importacao do 'list.service'

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];

  animalDetails = ''
           //(private  nomeamdo  : tipo do dado(classe)
  constructor(private listService: ListService) {       // criando um novo servico 'listService' que vem de 'ListService'
    this.getAnimals()
   }

  ngOnInit(): void { }

  showAge (animal: Animal) {        // metodo que recebe um animal
    this.animalDetails = `O animal ${animal.name} tem ${animal.age} anos`;
  }

  removeAnimal(animal: Animal) {    // link para o service
    console.log("Removendo animal...");
    this.animals = this.listService.remove(this.animals, animal);   // fazendo remocao visual
  }

  getAnimals(): void {      // metodo que acessa o metodo 'service'
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
    ;
  }

}
