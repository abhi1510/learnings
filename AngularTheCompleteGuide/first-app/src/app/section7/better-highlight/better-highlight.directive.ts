import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') bgColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.bgColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'trasnparent');
    this.bgColor = this.defaultColor;
  }

}
