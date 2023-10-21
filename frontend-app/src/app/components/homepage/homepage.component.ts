import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/Employee';
import { EmployeeService } from '../../services/employee.service';
import { FileContentService } from '../../services/file-content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  title: string = 'Buttons';
  showEmployeeTable: boolean = false;
  employeeData : Employee[] = [];

  constructor
  (
    private employeeService : EmployeeService,
    private router: Router,
  )
  {

  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  btnClick(table: string){
    switch(table){
      case 'veggies':
        this.router.navigate(['/fruits-vegs']);
        break;
      case 'emp':
        this.employeeService.getEmployeList().subscribe((data) => {
          this.employeeData = data;
        });
        this.showEmployeeTable = true;
        break;
      default:
        console.error("Table Name Does Not Exists !!");
        break; 
    }
  }

}
