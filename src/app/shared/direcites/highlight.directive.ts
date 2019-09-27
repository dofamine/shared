import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener, Input, OnInit, Renderer2
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  @Input() defaultColor: string;
  @HostBinding('style.color') color: string;
  @HostBinding('class.hello') hi: boolean;
  @HostBinding('attr.dataset.id') dataset: string = '22';
  @HostBinding('style.width.px') width: number = 20;

  constructor(private element: ElementRef,
              private renderer: Renderer2) {
    // console.log(element);
    // renderer.setStyle(element.nativeElement, 'text-transform', 'uppercase')
  }

  @HostListener('click', ['$event'])
  listener(e) {
    console.log(e);
    // this.renderer.setStyle(this.element.nativeElement, 'text-transform', 'uppercase');
    // this.renderer.setStyle(this.element.nativeElement, 'color', 'red');
    this.color = 'blue';
    this.dataset = '22312312';
  }

  @HostListener('dblclick')
  remove() {
    this.renderer.removeStyle(this.element.nativeElement, 'text-transform');
    this.renderer.removeStyle(this.element.nativeElement, 'color');
  }

  ngOnInit(): void {
    this.color = this.defaultColor || this.color;
  }
}
