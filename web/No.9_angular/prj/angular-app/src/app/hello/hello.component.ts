import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  title:string;
  message:string;
  text1:string;
  myControl:FormControl;

  constructor() {
    this.title = "";
    this.message = "";
    this.text1 = "OK";
    this.myControl = new FormControl('OK');
  }

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = 'ngModelを使う';
    this.text1 = 'OK';
  }

  doClick(){
    this.message = '「'+ this.myControl.value + '」と書きましたね';
  }
}
