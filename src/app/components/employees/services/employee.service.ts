import { Injectable } from '@angular/core';
import { Observable, of, delay, Subject } from 'rxjs';
import { Employee } from '../../../shared/models/employee';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {






    
//   private mockEmployees: Employee[] = [
//     {
//       id: 1,
//       name: 'John Doe',
//       role: 'Developer',
//       phone: '555-123-4567',
//       email: 'john@example.com',
//       photo: 'https://randomuser.me/api/portraits/men/1.jpg'
//     },
//     {
//       id: 2,
//       name: 'Jane Smith',
//       role: 'Designer',
//       phone: '555-987-6543',
//       email: 'jane@example.com',
//       photo: 'https://randomuser.me/api/portraits/women/1.jpg'
//     },
//     {
//       id: 3,
//       name: 'Robert Johnson',
//       role: 'Manager',
//       phone: '555-456-7890',
//       email: 'robert@example.com',
//       photo: 'https://randomuser.me/api/portraits/men/2.jpg'
//     }
//   ];

  url='../api/employee/employee.json'
  temp: any;
  filteredEmployee: any
  constructor(private http: HttpClient) { }

  getEmployee() {
    let subject = new Subject()
    setTimeout(() => { subject.next(EMPLOYEE); subject.complete(); }, 100)
    return subject
  }

  getEmployeebyID(id: number) {
  return EMPLOYEE.find(employee => employee.id === id)
  }

  saveEmployee(employee:any) {
    EMPLOYEE.push(employee)
  }

  saveEmployeebyName(employee:any, id:any) {
    // this.filteredEmployee=EMPLOYEE.find(employee => employee.id === id)
    // console.log(this.filteredEmployee)
    EMPLOYEE.push(employee)
    EMPLOYEE.pop();
  }

   DeleteEmployee(employee:any) {
    let temp =EMPLOYEE.indexOf(employee)
    EMPLOYEE.splice(temp,1)
  }

}

const EMPLOYEE = [
  {
    "id": 66896,
    "name": "Vinay",
    "phone": "9620529048",
    "address": {
      "city": "Bangalore",
      "street": "ABC street",
      "state": "Karnataka",
      "PostCode": "560076"
    }
  },
  {
    "id": 66923,
    "name": "John",
    "phone": "7720808609",
    "address": {
      "city": "Hyderabad",
      "street": "PQR street",
      "state": "Telangana",
      "PostCode": "412114"
    }
  },
  {
    "id": 66898,
    "name": "Vijay",
    "phone": "8888830456",
    "address": {
      "city": "Pune",
      "street": "Kothrud",
      "state": "Maharastra",
      "PostCode": "411067"
    }
  },
  {
    "id": 66945,
    "name": "Sneha",
    "phone": "75df426897",
    "address": {
      "city": "Pune",
      "street": "Buldana",
      "state": "Maharastra",
      "PostCode": "414098"
    }
  },
  {
    "id": 66898,
    "name": "Amit",
    "phone": "8848683056",
    "address": {
      "city": "Pune",
      "street": "Solapur",
      "state": "Maharastra",
      "PostCode": "413067"
    }
  }
]

