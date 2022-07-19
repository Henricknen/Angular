import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Momento } from 'src/app/momento';

@Component({
  selector: 'app-momento-form',
  templateUrl: './momento-form.component.html',
  styleUrls: ['./momento-form.component.css']
})
export class MomentoFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Momento>()
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

  onFileSelected(event: any) {

    const file: File = event.target.files[0];

    this.momentoform.patchValue({ imagem: file });

  }


  submit(): void {

    if(this.momentoform.invalid) {
      return;
    }

    console.log(this.momentoform.value);

    this.onSubmit.emit(this.momentoform.value);

  }


}
