import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive( {
  selector: '[appBasicHighLight]'
} )
export class BasicHighlighterDirective implements OnInit {

  public constructor( private elementRef: ElementRef ) {}

  public ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
