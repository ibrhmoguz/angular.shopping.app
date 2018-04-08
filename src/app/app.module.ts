import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    RecipesModule,
    SharedModule
  ],
  providers: [ShoppingService, RecipeService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
