import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { EmployeesService } from '../../../services/employees.service';
import { CompaniesService } from '../../../services/companies.service';
import { Company } from '../../../models/company';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-new-employee',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.css',
  animations: [
  trigger("inputFields",[
      state('normal', style({
        'font-size': '16px',
        'height': '36px'
      })),
          state('focused', style({
        'font-size': '32px',
        'height': '62px'
      })),
      transition('* <=> *',[
        animate(500)
      ])
    ]),


    trigger('caption', [
      state('normal', style({
        'color': '#000000',
        transform: 'translateX(0px)'
      })),
      state('clicked1', style({
        'color': '#00ff00',
         transform: 'translateX(-500px)'
      })),
      state('clicked2', style({
        'color': '#ff0000',
         transform: 'translateX(-1000px)'
      })),
      transition('*<=>*', [
        animate(1000)
      ]),
]),
    trigger('phoneInput',[
      state("*", style({
        transform:"translateX(0px) translateY(0px)",
        height:'38px',
        'color': '#ff0000',
      })),
      transition("void => *",[
        //Aukštis 0 , atvaizduojamas už ekrano ribų
        style({
          height:'0px',
         'opacity':'0',
          
        }),
        //Išplečiame laisvą vietą iš aukščio
        animate(500, style({
          height:'38px',
       
        })),
        //Įvažiuojame į tinkamą vietą
        animate(750, style({
          
        }))
      ]),
      transition("* => void",[
        //Aukštis 0 , atvaizduojamas už ekrano ribų
        
        animate(750, style({
          height:'38px',
          transform:"translateX(2000px) translateY(300px)"
        })),
        //Įvažiuojame į tinkmą vietą
        animate(500, style({
          height:'0px',
          transform:"translateX(2000px) translateY(300px)"
        }) 

        )
      ])

    ])
  ]
})
export class NewEmployeeComponent {

public inputState=['normal', 'normal', 'normal', 'normal', 'normal', 'normal'];

public employeeForm: FormGroup;


public companies:Company[]=[];

public captionState='normal';



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



public captionClick(){
  switch (this.captionState){
    case 'normal':
      this.captionState='clicked1';
      break;
      case 'clicked1':
        this.captionState='clicked2';
          break;
           case 'clicked2':
        this.captionState='normal';
          break;
  }
  
}



public inputFocus(fieldId:number, state:boolean){
  if (state==true){
    this.inputState[fieldId]='focused';
  } else {
    this.inputState[fieldId]='normal';
  }
}

}
