import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) {

   }

public addEmployee(employee:Employee){
  return this.http.post('https://vasaros-stovykla-default-rtdb.europe-west1.firebasedatabase.app/company.json',employee);
}

}
