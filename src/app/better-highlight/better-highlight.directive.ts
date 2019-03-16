import { Directive, ElementRef, HostListener, OnInit, Renderer2, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';
  /**
   * HostBinding - you can bind any property on the element you have applied directive on.
   * Here we are setting the style background property
   */
  @HostBinding( 'style.backgroundColor') backgroundColor;

  constructor( private renderer: Renderer2, private elementRef: ElementRef ) { }

  /**
   * Lifecycle hook ngOnInit
   */
  public ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this is the way to use renderer to change the property of element
   // this.renderer.setStyle( this.elementRef.nativeElement, 'background-color','blue');
  }


  /**
   * Hostlistner - will change the property when the mouseenter event is occured
   * here applies the background as blue color
   * @param eventData
   */
  @HostListener('mouseenter')
  public onMouseEnter( eventData: Event ) {
   // this.renderer.setStyle( this.elementRef.nativeElement, 'background-color', 'blue');
   // this.backgroundColor = 'green';
    this.backgroundColor = this.highlightColor;
  }

  /**
   * Allows the property to be changed when the mouse leave event occured
   * Here it will change the background color to green/transparent
   * @param eventData
   */
  @HostListener('mouseleave')
  public onMouseLeave( eventData: Event ) {
   // this.renderer.setStyle( this.elementRef.nativeElement, 'background-color', 'green');
   // this.backgroundColor = 'transparent'; // use of hostbinding
    this.backgroundColor = this.defaultColor;
  }

}
