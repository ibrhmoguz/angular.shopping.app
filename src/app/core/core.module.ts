import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../appRouting.module";
import { DataStorageService } from "../shared/dataStorageService.service";
import { ShoppingService } from "../shopping-list/service/shoppingService.service";
import { RecipeService } from "../recipes/service/recipeService.service";

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers:[
        ShoppingService, 
        RecipeService, 
        DataStorageService
    ]
})
export class CoreModule {

}