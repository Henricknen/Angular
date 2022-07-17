import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-momento-form',
  templateUrl: './momento-form.component.html',
  styleUrls: ['./momento-form.component.css']
})
export class MomentoFormComponent implements OnInit {
  @Input() btnText!: string;

  momentoform!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.momentoform = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('',[Validators.required]),
      descripition: new FormControl('',[Validators.required]),
      imagem: new FormControl('')
    })
  }

  get title() {
    return this.momentoform.get('title')!;
  }

  get descripition() {
    return this.momentoform.get('descripition')!;
  }

  submit() {

    if(this.momentoform.invalid) {
      return;
    }

    console.log("Enviou formulario!!!");
  }

}
