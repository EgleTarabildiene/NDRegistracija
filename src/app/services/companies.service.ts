import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '../models/company';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http:HttpClient) { }

 public addCompany(company:Company){
return this.http.post("https://inventorizacija-a61ca-default-rtdb.europe-west1.firebasedatabase.app/company.json", company);
 }

public loadCompanies(){
return this.http
.get<{[key:string]:Company}>("https://inventorizacija-a61ca-default-rtdb.europe-west1.firebasedatabase.app/company.json")
.pipe(
  map((data):Company[]=>{
let copn:Company[]=[];
for(let c in data){
  copn.push({...data[c], id:c})
}

return copn;

  })
)
}
}