import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  getEmployee() {
    return [
      { id: 1, name: 'Saif', age: 25 },
      { id: 2, name: 'Fardin', age: 26 },
      { id: 3, name: 'Anim', age: 25 },
      { id: 4, name: 'Fuad', age: 26 },
    ];
  }
}
