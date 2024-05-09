import { Directive } from '@angular/core';

@Directive({
  selector: '[appNumberValidator]',
  standalone: true
})
export class NumberValidatorDirective {

  constructor() { }

}
