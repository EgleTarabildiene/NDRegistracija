import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NumberValidatorDirective } from '../../../directives/number-validator.directive';
import { CompaniesService } from '../../../services/companies.service';

@Component({
  selector: 'app-new-company',
  standalone: true,
  imports: [FormsModule, CommonModule, NumberValidatorDirective],
  templateUrl: './new-company.component.html',
  styleUrl: './new-company.component.css'
})
export class NewCompanyComponent {

constructor(private companiesService:CompaniesService){

}


public newCompanySubmit(f:NgForm){
  //console.log(f.form.value);
  this.companiesService.addCompany(f.form.value).subscribe(()=>{
    
  })

  
}




}
