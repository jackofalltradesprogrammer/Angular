import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-count',
  templateUrl: './people-count.component.html',
  styleUrls: ['./people-count.component.css'],
  inputs:['allCount', 'maleCount', 'femaleCount']
})
export class PeopleCountComponent implements OnInit {

  allCount:number=0;
  maleCount:number=0;
  femaleCount:number=0;
  constructor() { }

  ngOnInit() {
  }

}
