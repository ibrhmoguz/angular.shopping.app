import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe ', 'This is a test dude!!!', 'https://cooking.nytimes.com/recipes/6015-sauteed-salmon-with-leeks-and-tomatoes'),
    new Recipe('A Test Recipe ', 'This is a test dude!!!', 'https://cooking.nytimes.com/recipes/6015-sauteed-salmon-with-leeks-and-tomatoes')
  ];

  constructor() { }

  ngOnInit() {
  }

}
