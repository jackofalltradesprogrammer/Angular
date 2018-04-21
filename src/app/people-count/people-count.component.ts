import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people-count',
  templateUrl: './people-count.component.html',
  styleUrls: ['./people-count.component.css'],
  inputs:['allCount', 'maleCount', 'femaleCount'],
  outputs: ['childEvent1']
})
export class PeopleCountComponent implements OnInit {

  allCount:number=0;
  maleCount:number=0;
  femaleCount:number=0;

  childEvent1:EventEmitter<string> = new EventEmitter<string>();
  count:string;
  onChange = function(){
    this.childEvent1.emit(this.count);
  }
  constructor() { }

  ngOnInit() {
  }

}
