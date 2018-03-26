import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInpuRef: ElementRef;
  @ViewChild('amountInput') amountInpuRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInpuRef.nativeElement.value;
    const ingAmount = this.amountInpuRef.nativeElement.value;
    const ing = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(ing);
  }
}
