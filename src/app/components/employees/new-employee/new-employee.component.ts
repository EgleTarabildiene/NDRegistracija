import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { EmployeesService } from '../../../services/employees.service';
import { CompaniesService } from '../../../services/companies.service';
import { Company } from '../../../models/company';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-new-employee',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.css'
})
export class NewEmployeeComponent {
public employeeForm: FormGroup;


public companies:Company[]=[];

constructor(private employeesService:EmployeesService, private companiesService:CompaniesService){
 this.employeeForm=new FormGroup({
     'name':new FormControl(null, [Validators.required, Validators.minLength(3)]),
     'surname':new FormControl(null, [Validators.required, Validators.minLength(3)]),
     'duties':new FormControl(null, [Validators.required, Validators.minLength(3)]),
     'workCompany':new FormControl(null),
     'phoneNumbers':new FormArray([
      new FormControl(null, Validators.required)
     ]),
  
 });
this.companiesService.loadCompanies().subscribe((data)=>{
this.companies=data;
})




}





 onSubmit(){
    console.log(this.employeeForm.value);
    this.employeesService.addEmployee(this.employeeForm.value).subscribe(()=>{
      this.employeeForm.reset();
      (this.employeeForm.get('phoneNumbers') as FormArray).controls=[
        new FormControl(null, Validators.required)
      ];
    })
    
  }

  static createUniqueInvNumberValidator(employeesService:EmployeesService){
    return (control:FormControl):Promise<ValidationErrors | null> | Observable<ValidationErrors | null>=>{
   
      return  employeesService.loadEmployees().pipe(map((data)=> null));
    };

  }


  get phoneNumbers(){
    return (this.employeeForm.get('phoneNumbers') as FormArray).controls;
  }


   public addPhoneField(){
  
      const field=new FormControl(null, Validators.required);
      
      (this.employeeForm.get('phoneNumbers') as FormArray).push(field);
      
  }

  public removePhoneField(){
    (this.employeeForm.get('phoneNumbers') as FormArray).removeAt(-1);
  }
}
