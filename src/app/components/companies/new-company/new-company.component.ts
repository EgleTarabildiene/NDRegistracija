import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-company',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-company.component.html',
  styleUrl: './new-company.component.css'
})
export class NewCompanyComponent {

public newCompanySubmit(f:NgForm){
  console.log(f.form.value);
  
}




}
