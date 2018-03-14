import { Component } from '@angular/core';
import { Employee, IEmployee} from './Employee';
//@component contains json object 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // styleUrls: ['./app.component.css']
})


export class AppComponent{
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
}

// Move it to the new file
// interface IEmployee{
//   id: number
//   ename: string
//   job: string
//   salary:number
// }

// class Employee implements IEmployee {
//   id: number
//   ename: string
//   job: string
//   salary:number
//   constructor(id?:number, ename?: string, job?: string, salary?:number){
//     this.id=id;
//     this.ename=ename;
//     this.job=job;
//     this.salary=salary; 
//   }
  
// }


// export class AppComponent{
//   x={};
//   employees:any[];
//   r:number=0;
//   msg:string='';
//   constructor(){
//     this.x = null;
//     this.employees = [
//     {id:101, ename:'Kiran', job:'Trainer', salary:5500},
//     {id:102, ename:'Suhal', job:'Trainer', salary:5300},
//     {id:103, ename:'Taran', job:'Programmer', salary:4500},
//     {id:104, ename:'Abhole', job:'Developers', salary:3500}
//   ];
//   }
//   firstRow(){
//     this.r=0;
//     this.x = this.employees[this.r];
//     this.msg = "";
//   }
//   nextRow(){
//     if(this.r < this.employees.length)
//       this.r+=1;
//     this.x = this.employees[this.r];
//   }
//   prevRow(){
//     if(this.r >0)
//       this.r-=1;
//     this.x = this.employees[this.r];
//     this.msg = "";
//   }
//   lastRow(){
//     this.r=this.employees.length-1;
//     this.x = this.employees[this.r];
//     this.msg = "no more records";
//   }
// }






// export class AppComponent{
//   employees:any[];
//   heading:boolean=false;
//   getEmployees(){
//     this.heading=true;
//     this.employees = [
//       {id:101, ename:'Kiran', job:'Trainer', salary:5500},
//       {id:102, ename:'Suhal', job:'Trainer', salary:5300},
//       {id:103, ename:'Taran', job:'Programmer', salary:4500},
//       {id:104, ename:'Abhole', job:'Developers', salary:3500}
//     ];
//   }

//   clearEmployees(){
//     this.heading=false;
//     this.employees=null;
//   }
// }


// export class AppComponent{

//     operations:string[] = ['Create', 'Retrieve', 'Update', 'Delete'];
// }



// export class AppComponent {
//   items:string[]=[];
//   title:string='';
//   msg:string='';
//   constructor(){ }
//    getItems(p) {
//      if (p=='vegetables'){
//         this.title='List of vegetables';
//         this.items=['potato','onion','tomato','banana'];
//         this.msg='Count of vegetables ' + this.items.length;
//      }
//       else if (p=='fruits'){
//         this.title='List of fruits';
//         this.items =['Apple', 'Banana', 'Cherry'];
//         this.msg='Count of fruits ' + this.items.length;
//       }
        
//    } 
// }




// export class AppComponent {
  
//   name:string;
//   gender:string;
//   msg:string;
//   findGender(){
//     if (this.name === undefined || this.name === '')
//       this.msg = "please enter a name";
//     else
//       this.msg = `Hello ${this.gender} ${this.name}`;
//   }

   
// }

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
// }