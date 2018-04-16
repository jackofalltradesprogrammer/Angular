import { Component, OnInit } from '@angular/core';
import {Person, IPerson} from './Person'

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  people:any=[];
  constructor() {
    this.people=[
      {id:1001,pname:'kiran', gender:'Male', age:30},
      {id:1002,pname:'Happy', gender:'Female', age:30},
      {id:1003,pname:'Gagan', gender:'Male', age:30},
      {id:1004,pname:'Amar', gender:'Male', age:30},
      {id:1005,pname:'Rajiv', gender:'Male', age:30},
    ]
    
   }

  ngOnInit() {
  }

}
