import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-list',
  template: `
    <div>
      <h1>Employee List</h1>
      <ul *ngFor="let emp of employees">
        <li>{{ emp.id }} . {{ emp.name }}</li>
      </ul>
    </div>
  `,
  styleUrls: ['./emp-list.component.css'],
})
export class EmpListComponent implements OnInit {
  public employees: any = [];

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this._employeeService.getEmployee()
    .subscribe((data)=>this.employees=data)
  }
}
