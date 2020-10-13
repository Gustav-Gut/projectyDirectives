import { Directive,HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {

  constructor(
    private eRef: ElementRef
  ) { }

  @HostListener('click') afsfasfas(){
    this.eRef.nativeElement.classList.add('paddingAll');
    this.eRef.nativeElement.style.borderRadius="50%";
    console.log('click HostListener');
  }

}
