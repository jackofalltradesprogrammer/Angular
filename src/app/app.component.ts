import { Component } from '@angular/core';
//@component contains json object 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'Angular App';
  // name:string='Kiran';
  // city:string='Vizag';
  msg:string = 'angular app';
   wishes = function():string{
     return "good moring folks!";
  
   }
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';
// }