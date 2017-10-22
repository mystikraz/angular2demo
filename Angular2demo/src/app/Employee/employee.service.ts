import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class EmployeeService {

    constructor(private _http: Http) { }

    getEmployees():Observable<IEmployee[]>{
      /*  return [
            { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 55000, dateOfBirth: '12/22/1990' },
            { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 55000, dateOfBirth: '12/22/1990' },
            { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 55000, dateOfBirth: '12/22/1990' },
            { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 55000, dateOfBirth: '12/22/1990' },
            { code: 'emp105', name: 'Jane', gender: 'Female', annualSalary: 55000, dateOfBirth: '12/22/1990' },
            { code: 'emp106', name: 'Mane', gender: 'Male', annualSalary: 55000, dateOfBirth: '12/22/1990' }

        ];*/

        return this._http.get("http://localhost:13360/api/employees")
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handleError);

    }
    getEmployeeByCode(empCode:string): Observable<IEmployee> {
       
        return this._http.get("http://localhost:13360/api/employees/"+ empCode)
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handleError);

    }

    handleError(error:Response) {
        console.error(error);
        return Observable.throw(error);
    }
}