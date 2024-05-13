import { Company } from "./company";


export class Employee{
    public id:string|null=null;
    public name:string|null=null;
    public surname:string|null=null;
    public duties:string|null=null;
    public workCompany_id:string|null=null;
    public workCompany:Company|null=null;
    public phoneNumbers:string[]=[];
  
}



/*Vardas
Pavardė
Pareigos
Įmonė (Pasirinkimas iš sąrašo)
Telefono numeriai (keletas telefono numerių)
*/