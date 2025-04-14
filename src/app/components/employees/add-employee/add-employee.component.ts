import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {
  employeeForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private employee:EmployeeService, private router:Router) { }

  Validations() {
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      id: ['', Validators.required],
      phone: ['', Validators.required],
      address: this.formBuilder.group({
          street: ['', Validators.required],
          city: ['', Validators.required],
          state: ['', Validators.required],
          PostCode: ['', Validators.required]
      })
    })
  }

  cancel() {
    this.router.navigate(['/employee'])
  }


  saveEmployee(value:any) {
    console.log(value)
    this.employee.saveEmployee(value)
    this.router.navigate(['/employee'])
  }
  
  ngOnInit() {
      this.Validations();
  }

}
