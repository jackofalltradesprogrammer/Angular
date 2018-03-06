import { Component } from '@angular/core';
//@component contains json object 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // styleUrls: ['./app.component.css']
})


export class AppComponent{

    operations:string[] = ['Create', 'Retrieve', 'Update', 'Delete'];
}



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