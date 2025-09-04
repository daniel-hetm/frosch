import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMagnifier]'
})
export class Magnifier {

  constructor() { }

  @HostBinding('style.width') width = '200px';

  @HostBinding('style.transition') transition = 'width 0.3s ease';
  

  @HostListener('mouseenter', ['$event'])
  onHover(e: MouseEvent){
    this.width = '300px';
  }

  @HostListener('mouseleave', ['$event'])
  onLeave(e: MouseEvent){
    this.width = '200px';
  }

}
