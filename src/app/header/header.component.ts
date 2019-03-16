import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()
  public featureSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  public onSelect( feature: string ): void {
    this.featureSelected.emit( feature );
  }

}
