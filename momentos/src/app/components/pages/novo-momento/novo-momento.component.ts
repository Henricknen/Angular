//import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Momento } from 'src/app/momento';

import { MomentoService } from './../../../services/momento.service';
import { MenssagensService } from 'src/app/services/menssagens.service';

@Component({
  selector: 'app-novo-momento',
  templateUrl: './novo-momento.component.html',
  styleUrls: ['./novo-momento.component.css']
})
export class NovoMomentoComponent implements OnInit {
  btnText = 'Compartilhar!';

  constructor(private momentoService: MomentoService,
    private menssagensService: MenssagensService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  async createHandler(momento: Momento) {
    const formData = new FormData()

    formData.append("title", momento.title)
    formData.append("descripition", momento.descripition)

    if(momento.image) {
      formData.append("image", momento.image);
    }



    await this.momentoService.createMomento(formData).subscribe();

    this.menssagensService.add('Momento adcionado...')      // exibir msg

    this.router.navigate(['/']);    // o usuario retorna pra home depois de adicionar o momento

    // redirect
  }

}
