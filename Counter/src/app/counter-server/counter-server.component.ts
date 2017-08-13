import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-counter-server',
  templateUrl: './counter-server.component.html',
  styleUrls: ['./counter-server.component.css']
})
export class CounterServerComponent implements OnInit {
  CounterName= 'Welcome Angular 2 world';
  CounterDesc= 'This is my first Counter';
  CounterArray= [{Name: this.CounterName, Desc: this.CounterDesc, Count: 0}];

  constructor() { }

  ngOnInit() {
  }

  onClickAddCounterButton(counterData: {Name: string, Desc: string, Count: number}) {
    if(counterData.Name) {
      this.CounterArray.push({
        Name: counterData.Name,
        Desc: counterData.Desc,
        Count: counterData.Count
      });
    }
  }


}
