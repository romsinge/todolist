import { Task } from './../interfaces/task';
import { Directive, ElementRef, Input, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[orgHighlight]'
})
export class HighlightDirective {

  @Input() applicable: boolean
  color: string

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') handleMouseover() {
    this.el.nativeElement.style.backgroundColor = "#eee"
  }

  @HostListener('mouseleave') handleMouseleave() {
    this.el.nativeElement.style.backgroundColor = this.color
  }

  ngOnInit() {
    if (this.applicable) {
      this.el.nativeElement.style.backgroundColor = "silver"
    }

    this.color = this.el.nativeElement.style.backgroundColor
  }
}
