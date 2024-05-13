import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Employee } from '../../../models/employee';
import { EmployeesService } from '../../../services/employees.service';
import { Company } from '../../../models/company';
import { CompaniesService } from '../../../services/companies.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-list-employees',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.css'
})
export class ListEmployeesComponent {
public employees:Employee[]=[];
public companies:Company[]=[];
company: any;

constructor(private employeesService:EmployeesService, private companiesService:CompaniesService){

  this.companiesService.loadCompanies().subscribe((data)=>{
    this.companies=data;





this.employeesService
.loadEmployees()
.pipe(
          map((data)=>{
            //Ciklas kuris eina per visus įrašus
            data.forEach((employee,employeeId)=>{
              //Ciklas kuris eina per visus darbuotojus
              this.companies.forEach((company, companyId)=>{
                if (employee.workCompany_id==company.id){
                  data[employeeId].workCompany=company;
                }
              })
            });
            return data;
          }
        ))
        //Kai gauname įrašus, juos prisiskiriame kintamajam ir atvaizduojam
        .subscribe((data)=>{
          this.employees=data;
        });


      });
    }
 
  }
