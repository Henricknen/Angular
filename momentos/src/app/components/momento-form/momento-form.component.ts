import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-momento-form',
  templateUrl: './momento-form.component.html',
  styleUrls: ['./momento-form.component.css']
})
export class MomentoFormComponent implements OnInit {
  @Input() btnText!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
