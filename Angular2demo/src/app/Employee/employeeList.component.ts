import { Component,OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']
    

})
export class EmployeeListComponent implements OnInit {

    employees: IEmployee[];
    selectedEmployeeCountRadioButton: string = "All";
    statusMessage: string ='Loading data. Please wait...';

//    private _employeeService: EmployeeService;


    constructor(private _employeeService: EmployeeService) {
//        this._employeeService = _employeeService;
    }

   /* getEmployees(): void {
        this.employees= [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 55000, dateOfBirth: '12/22/1990' },
            { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 55000, dateOfBirth: '12/22/1990' },
            { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 55000, dateOfBirth: '12/22/1990' },
            { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 55000, dateOfBirth: '12/22/1990' },
            { code: 'emp105', name: 'Jane', gender: 'Female', annualSalary: 55000, dateOfBirth: '12/22/1990' }
        ];
    }*/
//    trackByEmpCode(index: number, employee: any): string {
//        return employee.code;
//    }

    ngOnInit(): void {
        this._employeeService.getEmployees()
            .subscribe((employeeData) => this.employees = employeeData,
            (error) => {
                this.statusMessage = 'Problem with the service. Please try again after sometime.';
                console.error(error);
            });

    }


    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
    getTotalEmployeesCount(): number {
        return this.employees.length;
    }
    getTotalMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Male").length;
    }
    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }
}