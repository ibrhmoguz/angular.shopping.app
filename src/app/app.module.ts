import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingService } from './shopping-list/service/shoppingService.service';
import { AppRouting } from './appRouting.module';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipes/service/recipeService.service';
import { DataStorageService } from './shared/dataStorageService.service';
import { RecipesModule } from './recipes/recipe.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shoppingList.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRouting,
    RecipesModule,
    ShoppingListModule,
    SharedModule
  ],
  providers: [ShoppingService, RecipeService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
