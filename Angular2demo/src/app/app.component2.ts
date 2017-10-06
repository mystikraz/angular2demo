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
<!--                    <img src="{{imagePath}}"/>-->
<!--                    <img [src]="imagePath"/>-->
                    <img src="http://pragimtech.com/{{imagePath}}"/>
                     <my-employee></my-employee>
                    <button disabled='{{isDisabled}}'>Click Me</button>
                    <span bind-innerHtml='pageHeader'></span>

<div [innerHtml]='badHtml'></div>
<button style='color:red' [style.font-size.px]="fontSize">my button</button>
<button style='color:red' [ngStyle]="addStyles()">my button</button>
                </div>`
})
export class AppComponent {
    pageHeader = 'Employee Details';
    imagePath: string = 'images/logo.jpg';
    isDisabled: boolean = false;
    badHtml: string = 'Hello <script>alert{"Hacked"};</script> World';

    firstName: string = 'Tom';
    lastName: string = 'Hopkins';
    isItalic: boolean = true;
    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
    isBold: boolean = true;
    fontSize: number = 30;
    addStyles() {
        let styles = {
            'font-size.px': this.fontSize,
            'font-style': this.isItalic ? 'italic' : 'normal',
            'font-weight': this.isBold ? 'bold' : 'normal'
        };
        return styles;
    }

}
