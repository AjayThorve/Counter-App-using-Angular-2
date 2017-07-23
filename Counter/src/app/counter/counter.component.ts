import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  Count=0;
  isEdit="hide";
  Name:string="";
  a="s";
  Details="";
  constructor() {
    this.Count=0;
    this.isEdit="hide";
    this.Name="Category Name";
    this.Details="Enter details about the category(optional)";
   }

  ngOnInit() {
  }

  onMinus(){
    if(this.Count>0){
      this.Count--;
    }
  }

  onPlus(){
    this.Count++;
  }
}
