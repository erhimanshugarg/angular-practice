import { Directive, HostListener, HostBinding } from '@angular/core';

/**
 * Dropdown directive
 */
@Directive({
  selector: '[appDropdown]'
} )
export class DropDownDirective {

  /**
   * Bind Open class to the element
   */
  @HostBinding('class.open') isOpen = false;

  /**
   * Apply the open class to element clicked, if not open
   */
  @HostListener('click') toggleDropDown() {
    this.isOpen = !this.isOpen;
  }
}
