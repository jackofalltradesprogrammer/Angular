import { Component } from '@angular/core';
//@component contains json object 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // styleUrls: ['./app.component.css']
})

export class AppComponent{
  x={};
  employees:any[];
  constructor(){
    this.x = null;
    this.employees = [
    {id:101, ename:'Kiran', job:'Trainer', salary:5500},
    {id:102, ename:'Suhal', job:'Trainer', salary:5300},
    {id:103, ename:'Taran', job:'Programmer', salary:4500},
    {id:104, ename:'Abhole', job:'Developers', salary:3500}
  ];
  }
  selectRow(i){
    this.x = this.employees[i];
  }
}






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