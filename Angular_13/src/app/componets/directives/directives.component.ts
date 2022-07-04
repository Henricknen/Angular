import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  size = 40;
  font = 'Arial';
  color = 'blue';

  classes =  ['green-title', 'small-title'];   // criação de classes

  underline = 'underline-title';

  constructor() { }

  ngOnInit(): void {
  }

}
