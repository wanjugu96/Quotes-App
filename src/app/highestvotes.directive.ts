import { Directive,ElementRef  } from '@angular/core';

@Directive({
  selector: '[appHighestvotes]'
})
export class HighestvotesDirective {

  constructor(private elem:ElementRef){
    this.elem.nativeElement.style.backgroundcolor='yellow';
  }



}
