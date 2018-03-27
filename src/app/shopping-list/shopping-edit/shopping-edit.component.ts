import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../service/shoppingService.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInpuRef: ElementRef;
  @ViewChild('amountInput') amountInpuRef: ElementRef;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInpuRef.nativeElement.value;
    const ingAmount = this.amountInpuRef.nativeElement.value;
    const ing = new Ingredient(ingName, ingAmount);
    this.shoppingService.addIngredient(ing);
  }
}
