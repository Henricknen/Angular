import { Component, OnInit } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { MenssagensService } from 'src/app/services/menssagens.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  faTimes = faTimes;

  constructor(public menssagensService: MenssagensService) {}

  ngOnInit(): void {
  }

}
