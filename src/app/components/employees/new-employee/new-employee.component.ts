import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { EmployeesService } from '../../../services/employees.service';

@Component({
  selector: 'app-new-employee',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.css'
})
export class NewEmployeeComponent {
public employeeForm: FormGroup;

constructor(private employeesService:EmployeesService){
 this.employeeForm=new FormGroup({
     'name':new FormControl(null, [Validators.required, Validators.minLength(3)]),
     'surname':new FormControl(null, [Validators.required, Validators.minLength(3)]),
     'duties':new FormControl(null, [Validators.required, Validators.minLength(3)]),
     'workCompany':new FormControl(null),
     'phoneNumbers':new FormArray([
      new FormControl(null, Validators.required)
     ]),
  
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
