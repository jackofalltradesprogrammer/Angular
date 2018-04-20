import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs:['receivedDataFromParent'],
  outputs:['childEvent1']
})
export class ChildComponent implements OnInit {
  childEvent1 = new EventEmitter<string>();

  onChange(){
    this.childEvent1.emit("Hello from Child");
  }

  receivedDataFromParent:string;
  
  constructor() { }

  ngOnInit() {
  }

}
