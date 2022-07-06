import { Injectable } from '@angular/core';

import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(animals: Animal[], animal: Animal) {    // passanso a lista toda de animais e tambem o animal que sera removido
    return animals.filter((a) => animal.name !== a.name);     // requisicao que faz a remocao no banco de dados
}

}
