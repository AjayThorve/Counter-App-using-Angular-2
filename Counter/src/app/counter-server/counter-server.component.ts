import { Component, OnInit } from '@angular/core';
import {Output}       from '@angular/core'
import {EventEmitter} from '@angular/core'

@Component({
  selector: 'app-counter-server',
  templateUrl: './counter-server.component.html',
  styleUrls: ['./counter-server.component.css']
})
export class CounterServerComponent implements OnInit {
  CounterName='';
  CounterArray=["1"];
  Searchbar=true;
  constructor() { }

  ngOnInit() {
  }

  onClickAddCounterButton(){
    this.CounterArray.push(this.CounterName);
  }

  onFocus(){
    this.Searchbar=false;
    console.log("haha");
  }
}
