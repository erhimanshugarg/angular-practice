import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output()
  public recipeWasSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  public recipes: Array<Recipe> = [
    new Recipe( 'Test Recipe', 'Dummy Text for Recipe',
     'https://i.ndtvimg.com/i/2015-10/matar-paneer_625x350_51443676633.jpg'),
     new Recipe( 'Another Test Recipe', 'This is Panner Masala Curry',
     'https://i.ndtvimg.com/i/2015-10/matar-paneer_625x350_51443676633.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  public onRecipeSelected( recipe: Recipe ) {
    this.recipeWasSelected.emit( recipe );
  }
}
