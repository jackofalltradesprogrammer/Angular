import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  msg:string='';
  getData(value){
    this.msg =  "Hello " + value ;
  }

  constructor() {
    
   }

  ngOnInit() {
  }

}
