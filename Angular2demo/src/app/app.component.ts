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
    template: `Your text: <input type='text' [(ngModel)]='userText'/> <br/><br/>
                    <simple [simpleInput]='userText'></simple>
`
})
export class AppComponent { //typescript class
   usertext:string='Pragim';
}
