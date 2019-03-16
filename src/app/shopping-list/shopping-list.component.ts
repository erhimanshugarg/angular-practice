import { Component, OnInit } from '@angular/core';
import { Ingradient } from '../shared/Ingrediant/ingradient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public ingradients: Array<Ingradient> = [
    new Ingradient( 'apple', 5 ),
    new Ingradient( 'Tomato', 10 ),
  ];
  constructor() { }

  ngOnInit() {
  }

}
