//import { Component } from '@angular/core';
//
//@Component({
//  selector: 'my-app',
//  template: `<h1>Hello {{name}}</h1>`,
//})
//export class AppComponent  { name = 'Angular 2!'; }


import { Component } from "@angular/core";

@Component({
    selector: 'my-app',
    template: `<div>
                    <h1>{{getFullName()}}</h1>
                    <img src="{{imagePath}}"/>
                     <my-employee></my-employee>
                </div>`
})
export class AppComponent {
    pageHeader = 'Employee Details';
    imagePath: string = 'http://pragimtech.com/images/logo.jpg';

    firstName: string = 'Tom';
    lastName: string = 'Hopkins';

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

}
