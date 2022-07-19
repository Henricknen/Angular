import { MomentoService } from './../../../services/momento.service';
import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Momento } from 'src/app/momento';

@Component({
  selector: 'app-novo-momento',
  templateUrl: './novo-momento.component.html',
  styleUrls: ['./novo-momento.component.css']
})
export class NovoMomentoComponent implements OnInit {
  btnText = 'Compartilhar!';

  constructor(private momentoService: MomentoService) { }

  ngOnInit(): void {
  }

  async createHandler(momento: Momento) {
    const formData = new FormData()

    formData.append("title", momento.title)
    formData.append("descripition", momento.descripition)

    if(momento.image) {
      formData.append("image", momento.image);
    }

    // todo

    await this.momentoService.createMomento(formData).subscribe();

    // exibir msg

    // redirect
  }

}
