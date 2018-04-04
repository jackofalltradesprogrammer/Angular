import { Component, OnInit } from '@angular/core';
import { Employee, IEmployee } from './Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

   // x:IEmployee=null; fix the error for the null appear when you load the page
   x = new Employee();
   employees:IEmployee[];
   msg:string='';
   constructor(){
     this.employees =new Array<IEmployee>(
       {id:101, ename:'Kiran', job:'Trainer', salary:5500},
       {id:102, ename:'Suhal', job:'Trainer', salary:5300},
       {id:103, ename:'Taran', job:'Programmer', salary:4500},
       {id:104, ename:'Abhole', job:'Developers', salary:3500}
     );
    
  
   this.msg = 'Total Employee count is ' + this.employees.length; 
   }
   selectRow(i){
 //     we are using cloning to get the data as when objects are given values, the memorey address will ng-change
 // and hence the two-way binding won't be possible.
     this.x = JSON.parse(JSON.stringify(this.employees[i]));
   }
 
   addRow(){
     this.employees.push(this.x);
     this.msg = 'Total Employee count is ' + this.employees.length;
     this.x = null;
     alert("Row added succesfully");
   }
   deleteRow(i){
     
     if (confirm("Are you sure"))
       this.employees.splice(i,1);
     this.msg = 'Total Employee count is ' + this.employees.length; 
   }
   updateRow(){
     var x1= new Employee();
     for (var i in this.employees) {
       if (this.employees[i].id == this.x.id){
         x1 = this.employees[i];
         break;
       }
     }
     this.employees[i]=JSON.parse(JSON.stringify(this.x));;
     alert('Row updated successfully');
   }

  ngOnInit() {
  }

}
