import { Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

export class ShoppingService {
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];
    constructor() { }

    getIngredients(){
        return this.ingredients;
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
}