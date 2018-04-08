import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './appRouting.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { ShoppingListModule } from './shopping-list/shoppingList.module';

@NgModule({
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    ShoppingListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
