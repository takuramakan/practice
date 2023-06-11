import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  title:string;
  message:string;
  price:number;
  now:Date;
  styleClass:string;
  count:number;
  input:string;
  visible:boolean;
  data:string[];

  constructor() {
    this.title = "";
    this.message = "";
    this.price = 0;
    this.now = new Date();
    this.styleClass = "red";
    this.count = 0;
    this.input = "";
    this.visible = true;
    this.data = ['1','2','3'];

    setInterval(
      ()=>{
        this.now = new Date();
        this.styleClass = this.styleClass == 'red' ? '' : 'red';
      },1000);
  }

  ngOnInit() {
    this.title = 'Hello-app';
    this.message = 'this is my first component';
    this.price = 500;
  }

  today() {
    return new Date().toLocaleString();
  }

  doClick() {
    /*
    this.message = ++this.count + "回クリックしました";
     */
    this.visible = !this.visible;
  }

  doType(val:string) {
    this.input = val;
    this.message = 'you type:' + this.input;
  }
}
