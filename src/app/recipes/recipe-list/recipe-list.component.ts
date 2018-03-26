import { Component, OnInit, Output,EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe1', 'This is simply a test1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlyzIcrYJY8ZyLdsMS1PzOfeNuIhvmZIGXM8LTwozWqpZsYscJuA'),
    new Recipe('A Test Recipe2', 'This is simply a test2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXaV5vKd3FLcWPhw0Q-p2q6_8tbxTMR8aB2m5ZekDVD15zxQ7Pw')
  ];

  selectedRecipe: Recipe;

  onSelectedRecipe(recipeItem) {
    console.log(recipeItem);
    this.recipeWasSelected.emit(recipeItem);
  }

  constructor() { }

  ngOnInit() {
  }

}
