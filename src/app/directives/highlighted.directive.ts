import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlighted]',
})
export class HighlightedDirective {
  @Input('highlighted') 
   isHighlighted = false;

  constructor() {

   }

  @HostBinding('class.highlighted')
  get cssClasses() {
    return this.isHighlighted;
  }

  @HostBinding('class.not-highlighted')
  get notHighlighted() {
    return !this.isHighlighted;
  }

  // @HostBinding('attr.disabled')
  // get disabled() {
  //   return true;
  // }
}
