import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-detail',
  template: `
    <h1>Employee Detail</h1>
    <ul *ngFor="let emp of employees">
      <li></li>
    </ul>
  `,
  styleUrls: ['./emp-detail.component.css'],
})
export class EmpDetailComponent implements OnInit {
  public employees: any = [];

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this._employeeService.getEmployee().subscribe((data) => console.log(data));
  }
}
