import { Component } from '@angular/core';
import { IEmployee } from './employee';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']

})
export class EmployeeListComponent {
    employees: IEmployee[];
    selectedEmployeeCountRadioButton:string="All";
    constructor() {
        this.employees = [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 55000, dateOfBirth: '12/22/1990' },
            { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 55000, dateOfBirth: '12/22/1990' },
            { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 55000, dateOfBirth: '12/22/1990' },
            { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 55000, dateOfBirth: '12/22/1990' },
            { code: 'emp105', name: 'Jane', gender: 'Female', annualSalary: 55000, dateOfBirth: '12/22/1990' },
            { code: 'emp106', name: 'Mane', gender: 'Male', annualSalary: 55000, dateOfBirth: '12/22/1990' }

        ];
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