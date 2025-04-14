import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Employee } from '../../../shared/models/employee';
import { EmployeeService } from '../services/employee.service';
import { HeaderComponent } from '../../../core/header/header.component';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule,HeaderComponent],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  list:any
  employeeList:any
  filteredEmployee:any
  constructor(private employee: EmployeeService, private router:Router) { }
_listFilter:string | undefined;
get listFilter(){
  return this._listFilter;
}
set listFilter(value){
this._listFilter = value;
this.filteredEmployee = this.listFilter ? this.performFilter(this.listFilter) : this.employeeList
}

  performFilter(filterby:any) {
     filterby = filterby.toLocaleLowerCase();
    return this.employeeList.filter((employee:any) =>
      employee.name.toLocaleLowerCase().indexOf(filterby) !== -1);
  }

  addEmployee(){
    this.router.navigate(['/employee/add']);
  } 

  deleteEmployee(value:any){
    this.employee.DeleteEmployee(value)
  }

  ngOnInit() {
    this.employee.getEmployee().subscribe(data=>{
      this.list = data
      this.employeeList = this.list
      this.filteredEmployee = this.employeeList
    })
  }


}