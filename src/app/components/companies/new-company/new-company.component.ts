import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { NumberValidatorDirective } from '../../../directives/number-validator.directive';
import { CompaniesService } from '../../../services/companies.service';
import { Observable, map } from 'rxjs';
import { EmployeesService } from '../../../services/employees.service';

@Component({
  selector: 'app-new-company',
  standalone: true,
  imports: [FormsModule, CommonModule, NumberValidatorDirective, ReactiveFormsModule],
  templateUrl: './new-company.component.html',
  styleUrl: './new-company.component.css'
})
export class NewCompanyComponent {
public companyForm:FormGroup;




constructor(private companiesService:CompaniesService, private employeesService:EmployeesService){
this.companyForm=new FormGroup({

   'name':new FormControl(null),
     'companyCode':new FormControl(null),
     'pvmCode':new FormControl(null),
     'adress':new FormControl(null),
     'email':new FormControl(null, {
      asyncValidators:[
        CompaniesService.createUniqueEmailValidator(companiesService)
      ]
     }),
     "_phone": new FormArray([
       new FormControl(null, Validators.required)
     ]),
    get "phone"() {
      return this["_phone"];
    },
    set "phone"(value) {
      this["_phone"] = value;
    },
     'id':new FormControl(null),
})

}


public newCompanySubmit(f:NgForm){
  //console.log(f.form.value);
  this.companiesService.addCompany(f.form.value).subscribe(()=>{
    
  })

  
}



}
