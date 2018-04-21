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
  name1: string;
  terms: boolean;
  onChange(){
    if (this.terms){
    this.childEvent1.emit('Thank you ' + this.name1 + " for accepting terms"); 
    }
    else {
      this.childEvent1.emit( this.name1 + " read and accept terms"); 
      }
  }

  receivedDataFromParent:string;
  
  constructor() { }

  ngOnInit() {
  }

}
