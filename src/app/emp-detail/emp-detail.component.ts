import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css'],
})
export class EmpDetailComponent implements OnInit {
  public employees: any = [];

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployee();
  }
}
