import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]'
})
export class BorderCardDirective {
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defaultStyle: string = 'solid ';
  private defaultHeight: number = 180;
  private defaultSize: number = 4;

  constructor (private elemRef: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }

  @Input('pkmBorderCard') borderColor: string; // alias 
  // @Input() pkmBorderCard: string // sans alias

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor)
  }

  setBorder(color: string) {
    const border = `${this.defaultStyle} ${this.defaultSize}px ${color}`;
    this.elemRef.nativeElement.style.border = border;
  }

  setHeight(size: number) {
    const height = `${size}px`;
    this.elemRef.nativeElement.style.height = height;
  }

}
