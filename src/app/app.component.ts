import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedMenu: string = 'recipe';

  onNavigate(menuItem) {
    console.log(menuItem);
    this.loadedMenu = menuItem;
  }
}
