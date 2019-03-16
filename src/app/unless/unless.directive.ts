import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

/**
 * Unless Directive - Structural directive
 */
@Directive( {
  selector: '[appUnless]'
} )
export class UnlessDirective {

  /**
   * sets the input property whenever there is a change in property
   *
   * adds dom only when condition is not true ( reverse of ngIf ) else clears
   * the dom ( does not add element to DOM )
   */
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  /**
   * Constructor
   *
   * @param templateRef - template to access
   * @param viewContainerRef - view container to render the template
   */
  constructor(private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef ) { }

}
