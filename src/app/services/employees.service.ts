import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) {

   }

public addEmployee(employee:Employee){
  return this.http.post("https://inventorizacija-a61ca-default-rtdb.europe-west1.firebasedatabase.app/employees.json",employee);
}


public loadEmployees(){
return this.http
.get<{[key:string]:Employee}>("https://inventorizacija-a61ca-default-rtdb.europe-west1.firebasedatabase.app/employees.json")
.pipe(
  map((data):Employee[]=>{
let copn:Employee[]=[];
for(let c in data){
  copn.push({...data[c], id:c})
}

return copn;

  })
)
}

}
