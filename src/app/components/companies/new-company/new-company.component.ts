import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NumberValidatorDirective } from '../../../directives/number-validator.directive';

@Component({
  selector: 'app-new-company',
  standalone: true,
  imports: [FormsModule, CommonModule, NumberValidatorDirective],
  templateUrl: './new-company.component.html',
  styleUrl: './new-company.component.css'
})
export class NewCompanyComponent {

public newCompanySubmit(f:NgForm){
  console.log(f.form);
  
}




}
