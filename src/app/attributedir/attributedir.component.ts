import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributedir',
  templateUrl: './attributedir.component.html',
  styleUrls: ['./attributedir.component.css']
})
export class AttributedirComponent implements OnInit {

  constructor() { }
  str:string="pink";
  clr:boolean=true;
  bgColor=false;
    ngOnInit() {
    }
  
  }