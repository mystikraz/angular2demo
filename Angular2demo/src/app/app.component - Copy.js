"use strict";
//import { Component } from '@angular/core';
//
//@Component({
//  selector: 'my-app',
//  template: `<h1>Hello {{name}}</h1>`,
//})
//export class AppComponent  { name = 'Angular 2!'; }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.pageHeader = 'Employee Details';
        this.imagePath = 'images/logo.jpg';
        this.isDisabled = false;
        this.badHtml = 'Hello <script>alert{"Hacked"};</script> World';
        this.firstName = 'Tom';
        this.lastName = 'Hopkins';
        this.isItalic = true;
        this.isBold = true;
        this.fontSize = 30;
    }
    AppComponent.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    AppComponent.prototype.addStyles = function () {
        var styles = {
            'font-size.px': this.fontSize,
            'font-style': this.isItalic ? 'italic' : 'normal',
            'font-weight': this.isBold ? 'bold' : 'normal'
        };
        return styles;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<div>\n                    <h1>{{getFullName()}}</h1>\n<!--                    <img src=\"{{imagePath}}\"/>-->//interpolation\n<!--                    <img [src]=\"imagePath\"/>-->//property binding\n                    <img src=\"http://pragimtech.com/{{imagePath}}\"/>\n                     <my-employee></my-employee>\n                    <button disabled='{{isDisabled}}'>Click Me</button>\n                    <span bind-innerHtml='pageHeader'></span>\n\n<div [innerHtml]='badHtml'></div>\n<button style='color:red' [style.font-size.px]=\"fontSize\">my button</button>\n<button style='color:red' [ngStyle]=\"addStyles()\">my button</button>\n                </div>"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component - Copy.js.map