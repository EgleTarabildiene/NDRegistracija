import { Routes } from '@angular/router';
import { NewCompanyComponent } from './components/companies/new-company/new-company.component';
import { NewEmployeeComponent } from './components/employees/new-employee/new-employee.component';

export const routes: Routes = [
    {path:"companies/add", component:NewCompanyComponent},
    {path:"employees/add", component:NewEmployeeComponent},
];
