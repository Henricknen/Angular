import { MomentoService } from './../../../services/momento.service';
import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';


import { Momento } from 'src/app/momento';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allMomentos: Momento[] = []     /* este array pega os 'momentos' do banco de dados */
  momentos: Momento[] = []    /* vi ser a exibição depois da busca */
  baseApiUrl = environment.baseApiUrl   /* busca dados da 'api' */

  faSearch = faSearch   /* definindo icone 'lupa' */
  searchTerm: string = "";    /* o que o usuario vai buscar */

  constructor(private momentoService: MomentoService) { }

  ngOnInit(): void {
    this.momentoService.getMomentos().subscribe((items) => {    /* iniçialização dos momentos do 'search' */

      const data = items.data

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString(
          'pt-BR'
          );
      });

      this.allMomentos = data;
      this.momentos = data;

    });
  }

  search(e:Event): void {

    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.momentos = this.allMomentos.filter((momento) => {
      return momento.title.toLowerCase().includes(value);
    });
  }

}
