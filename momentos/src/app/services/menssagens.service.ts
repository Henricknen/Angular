import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenssagensService {
  message: string = "";

  constructor() {}

  add(message: string) {    // metodo para adicionar a menssagem
    this.message = message

    setTimeout(() => {
      this.clear();
    }, 4000);
  }

  clear () {
    this.message = '';
  }

}
