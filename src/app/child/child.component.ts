import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs:['receivedDataFromParent']
})
export class ChildComponent implements OnInit {

  receivedDataFromParent:string;
  
  constructor() { }

  ngOnInit() {
  }

}
