import { Component, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataStorageService } from '../shared/dataStorageService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  activeMenu = "recipe";

  constructor(private dataStorageService: DataStorageService) { }

  setActiveMenu(menu: string) {
    this.activeMenu = menu;
  }

  onSaveData() {
    if (this.activeMenu == "recipe") {
      this.dataStorageService.storeRecipes().subscribe(
        (response) => console.log(response)
      );
    }
    else if (this.activeMenu == "shopping") {
      this.dataStorageService.storeIngredients().subscribe(
        (response) => console.log(response)
      );
    }
  }

  onFetchData() {
    if (this.activeMenu == "recipe") {
      this.dataStorageService.getRecipes();
    }
    else if (this.activeMenu == "shopping") {
      this.dataStorageService.getIngredients();
    }
  }
}
