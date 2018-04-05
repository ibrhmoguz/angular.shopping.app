import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../../shopping-list/service/shoppingService.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            1,
            'Baklava',
            'This is simply a test1',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlyzIcrYJY8ZyLdsMS1PzOfeNuIhvmZIGXM8LTwozWqpZsYscJuA',
            [
                new Ingredient('Şeker', 1),
                new Ingredient('Yufka', 20),
                new Ingredient('Antep Fıstık', 10)
            ]),
        new Recipe(
            2,
            'Waffle',
            'This is simply a test2',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXaV5vKd3FLcWPhw0Q-p2q6_8tbxTMR8aB2m5ZekDVD15zxQ7Pw',
            [
                new Ingredient('Şeker', 1),
                new Ingredient('Çilek', 20),
                new Ingredient('Muz', 10),
                new Ingredient('Çikolota Sosu', 10)
            ])
        ,
        new Recipe(
            3,
            'Pizza',
            'This is simply a test3',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDcGSsynhCcoNXNXj4Iuvjr5wIWRohLb241_WytZbzX8muPTUIIA',
            [
                new Ingredient('Mantar', 1),
                new Ingredient('Biber', 20),
                new Ingredient('Mozeralla', 10),
                new Ingredient('Çikolota Sosu', 10)
            ])
    ];
    constructor(private shoppingService: ShoppingService, private http: Http) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingService.addIngredients(ingredients);
    }

    getRecipeById(id: number) {
        return this.recipes.find((s) => { return s.id == id });
    }

    addRecipe(recipe: Recipe) {
        recipe.id = this.recipes.length + 1;
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index - 1] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index - 1, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
}