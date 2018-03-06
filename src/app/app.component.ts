import { Component } from '@angular/core';
//@component contains json object 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // styleUrls: ['./app.component.css']
})

export class AppComponent {
  e:any={id:1001, ename:"Kiran", job:"Trainer", salary:5500};
}




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