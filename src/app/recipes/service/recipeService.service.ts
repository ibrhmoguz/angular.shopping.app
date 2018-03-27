import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../../shopping-list/service/shoppingService.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Baklava',
            'This is simply a test1',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlyzIcrYJY8ZyLdsMS1PzOfeNuIhvmZIGXM8LTwozWqpZsYscJuA',
            [
                new Ingredient('Şeker', 1),
                new Ingredient('Yufka', 20),
                new Ingredient('Antep Fıstık', 10)
            ]),
        new Recipe(
            'Waffle',
            'This is simply a test2',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXaV5vKd3FLcWPhw0Q-p2q6_8tbxTMR8aB2m5ZekDVD15zxQ7Pw',
            [
                new Ingredient('Şeker', 1),
                new Ingredient('Çilek', 20),
                new Ingredient('Muz', 10),
                new Ingredient('Çikolota Sosu', 10)
            ])
    ];
    constructor(private shoppingService: ShoppingService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingService.addIngredients(ingredients);
    }
}