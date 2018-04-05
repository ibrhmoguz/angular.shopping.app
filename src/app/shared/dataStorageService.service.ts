import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { RecipeService } from "../recipes/service/recipeService.service";
import { Recipe } from "../recipes/recipe.model";
import { ShoppingService } from "../shopping-list/service/shoppingService.service";
import { Ingredient } from "./ingredient.model";

@Injectable()
export class DataStorageService {
    baseUrl = "https://serversrepo.firebaseio.com/";
    url = this.baseUrl + "recipeList.json";
    shoppingUrl = this.baseUrl + "shoppingList.json";

    constructor(private http: Http, private recipeService: RecipeService, private shoppingService: ShoppingService) { }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        return this.http.put(this.url, recipes);
    }

    getRecipes() {
        this.http.get(this.url).subscribe(
            (response) => {
                const recipes: Recipe[] = response.json();
                this.recipeService.setRecipes(recipes);
            });
    }

    storeIngredients() {
        const ingredients = this.shoppingService.getIngredients();
        return this.http.put(this.shoppingUrl, ingredients);
    }

    getIngredients() {
        this.http.get(this.shoppingUrl).subscribe(
            (response) => {
                const ingredients: Ingredient[] = response.json();
                this.shoppingService.setIngredients(ingredients);
            });
    }
}