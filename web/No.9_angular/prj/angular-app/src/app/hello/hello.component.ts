import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup} from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  title:string;
  message:string;
  text1:string;
  myControl:FormGroup;

  constructor() {
    this.title = "";
    this.message = "";
    this.text1 = "OK";
    this.myControl = new FormGroup({
      name: new FormControl(''),
      mail: new FormControl(''),
      age: new FormControl(0)
    });
  }

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = 'formControlを使う';
    this.text1 = 'OK';
  }

  doClick(){
    this.message = '「'+ this.myControl.value + '」と書きましたね';
  }

  onSubmit(){
    let result = this.myControl.value;
    this.message = JSON.stringify(result);
  }
}
