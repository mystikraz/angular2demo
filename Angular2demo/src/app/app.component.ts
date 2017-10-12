//import { Component } from '@angular/core';
//
//@Component({
//  selector: 'my-app',
//  template: `<h1>Hello {{name}}</h1>`,
//})
//export class AppComponent  { name = 'Angular 2!'; }


import { Component } from "@angular/core";

@
Component({ //decorator to make below class as angular component provided by angular
    selector: 'my-app',
    template: `<list-employee></list-employee>
`
})
export class AppComponent { //typescript class
   usertext:string='Pragim';
}
