import { Animal } from './../Animal';
import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';  // faz com que a requisição ocorra da melhor maneira possivel

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiUrl = 'http://localhost:3000/animals'    // declaração da URL da Api

  constructor(private http: HttpClient) { }

  remove(animals: Animal[], animal: Animal) {    // passanso a lista toda de animais e tambem o animal que sera removido
    return animals.filter((a) => animal.name !== a.name);     // requisicao que faz a remocao no banco de dados
  }

  getAll(): Observable<Animal[]> {    // este metodo faz requisição 'http', é um evento de obsevação
    return this.http.get<Animal[]>(this.apiUrl);
  }

}
