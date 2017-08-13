import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-creater',
  templateUrl: './counter-creater.component.html',
  styleUrls: ['./counter-creater.component.css']
})
export class CounterCreaterComponent implements OnInit {
  @Output() counterCreated = new EventEmitter<{Name: string, Desc: string, Count: number}>();
  name: string = '';
  desc: string = '';
  Searchbar = true;
  constructor() { }

  ngOnInit() {
  }

  onFocus(){
    this.Searchbar=false;
  }

  onClickAddCounterButton() {
    this.counterCreated.emit({
      Name: this.name,
      Desc: this.desc,
      Count: 0
    })

    this.Searchbar=true;
    this.name = '';
    this.desc = '';
  }


}
