import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input() CountElement: {Name: string, Desc: string, Count: number};

  Count = 0;
  isEdit= 'hide';

  constructor() {
   }

  ngOnInit() {
    this.Count = this.CountElement.Count;
  }

  onMinus() {
    if (this.Count > 0) {
      this.Count--;
    }
  }

  onPlus() {
    this.Count++;
  }
}
