import { Component } from "@angular/core";


@Component({

    selector: 'my-employee',

    templateUrl:'app/Employee/employee.component.html'

})

export class EmployeeComponent {
    classesToApply:string='italicClass boldClass';
    pageheader:string ='somthing';
    firstName: string = 'Ton';

    lastname: string = 'Hopkins';
    gender: string = 'Male';
    age: number = 20;
    showDetails: boolean = false;
    toggleDetails(): void {
        this.showDetails = !this.showDetails;
        console.log('Button Clicked');
    }
}