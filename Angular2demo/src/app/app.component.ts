//import { Component } from '@angular/core';
//
//@Component({
//  selector: 'my-app',
//  template: `<h1>Hello {{name}}</h1>`,
//})
//export class AppComponent  { name = 'Angular 2!'; }


import { Component } from "@angular/core";

@Component({//decorator to make below class as angular component provided by angular
    selector: 'my-app',
    template: `<my-employee></my-employee>`
})
export class AppComponent { //typescript class
    onClick(): void {
        console.log('Button Clicked');
    }

}
