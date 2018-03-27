import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe1', 'This is simply a test1', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlyzIcrYJY8ZyLdsMS1PzOfeNuIhvmZIGXM8LTwozWqpZsYscJuA'),
        new Recipe('A Test Recipe2', 'This is simply a test2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXaV5vKd3FLcWPhw0Q-p2q6_8tbxTMR8aB2m5ZekDVD15zxQ7Pw')
    ];
    constructor() { }

    getRecipes() {
        return this.recipes.slice();
    }
}