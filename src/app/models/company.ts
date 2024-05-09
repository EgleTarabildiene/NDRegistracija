/*Jūs kursite sistemą skirtą - mini CRM (sistemą skirtą įmonės klientų kontaktams išsaugoti). Pirmiausia susikurkite formą kurioje veiktų validacija, o paspaudus registruotis duomenys būtų atvaizduojami konsolėje.

Duomenys bus tokie (lentelės):
Įmonės
Pavadinimas
Įmonės kodas
PVM registracijos kodas
Adresas
el. pašto adresas
telefonas
Turite panaudoti šias validacijos taisykles:
Įmonės pavadinimas - tekstas, ne trumpesnis nei 2 simboliai ir ne daugiau nei 30 simbolių, laukas privalomas
Įmonės kodas - tik skaičiai
PVM registracijos kodas - skaičiai, arba LT[skaičiai]
el. pašto adresas - tekstas, validus el. pašto adresas, privalomas
telefonas - tekstas, formatas: +37065312345 ilgis nuo 10-12 simbolių (panaudoti place holder)


*/
export class Company{
    public name:string|null=null;
    public companyCode:number|null=null;
    public pvmCode:string|null=null;
    public adress:string|null=null;
    public email:string|null=null;
    public phone:string|null=null;
    public id:string|null=null;
}

