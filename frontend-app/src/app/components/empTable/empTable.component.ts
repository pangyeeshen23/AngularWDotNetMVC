import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/interfaces/Employee';

@Component({
  selector: 'app-emptable',
  templateUrl: './empTable.component.html',
  styleUrls: ['./empTable.component.css']
})
export class EmpTableComponent {
  @Input() visibility: boolean = false;
  @Input() data: Employee[] = [];
}
