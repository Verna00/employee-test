import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { authGuard } from './auth/gurds/auth.guard';

import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';

export const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'employee', 
    component: EmployeeListComponent,
    canActivate: [authGuard] // Add this guard
  },
  { 
    path: 'employee/add', 
    component: AddEmployeeComponent,
    canActivate: [authGuard]
  },
  { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    redirectTo: 'login' 
  }]