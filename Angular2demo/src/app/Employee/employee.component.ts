import { Component, OnInit } from "@angular/core";
import { IEmployee } from "./employee";
import { ActivatedRoute } from "@angular/router";
import { EmployeeService } from "./employee.service";


@Component({

    selector: 'my-employee',

    templateUrl: 'app/Employee/employee.component.html'

})

export class EmployeeComponent implements OnInit {
    //    classesToApply:string='italicClass boldClass';
    //    pageheader:string ='somthing';
    //    firstName: string = 'Ton';
    //
    //    lastname: string = 'Hopkins';
    //    gender: string = 'Male';
    //    age: number = 20;
    //    showDetails: boolean = false;
    //    toggleDetails(): void {
    //        this.showDetails = !this.showDetails;
    //        console.log('Button Clicked');
    //    }

    employee: IEmployee;
    statusMessage: string='Loading data. Please wait...';

    constructor(private _employeeService: EmployeeService, private _activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployeeByCode(empCode).subscribe(
            (employeeData) => {
                if (employeeData == null) {
                    this.statusMessage = 'Employee with the specified Employee Code doesn\'t exist';
                } else {
                    this.employee = employeeData;
                }
            }, (error) => {
                this.statusMessage = 'Problem with the service. Please try after sometime';
                console.log(error);

            }
        );
    }


}