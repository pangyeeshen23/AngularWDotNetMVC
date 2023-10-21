import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../interfaces/Employee';
import { Observable, of} from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:5207/api/Employees/GetEmployeeList';

  constructor(private http: HttpClient) { }

  getEmployeList() : Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }
}
