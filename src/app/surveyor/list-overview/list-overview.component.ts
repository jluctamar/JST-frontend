import { Component, Input, OnInit } from '@angular/core';
import { DishImage } from 'src/app/interfaces/surveyor-interfaces';
import { simpleInOutAnimation } from 'src/app/shared/animations';

@Component({
  selector: 'app-list-overview',
  templateUrl: './list-overview.component.html',
  styleUrls: ['./list-overview.component.scss'],
  animations: [simpleInOutAnimation]
})
export class ListOverviewComponent implements OnInit {
  @Input() browsingImgs: DishImage[];

  typesOfMeals = ["Breakfast", "Lunch","Dinner"]
  selectedMealType;
  selectedMeals: DishImage[] = [];
  selectedDish: DishImage;
  showDetails = false;

  constructor() { }

  ngOnInit(): void {
    this.selectedMealType = "Breakfast";
    this.parseOutSelectedMeals(this.selectedMealType);
  }

  onSelectType():void {
    this.parseOutSelectedMeals(this.selectedMealType);
  }

  onSelectDish(dish: DishImage):void {
    this.selectedDish = dish;
  }

  onOrderDish(): void {
    this.showDetails = true;
  }

  onCloseDetails(): void {
    this.showDetails = false;
  }

  parseOutSelectedMeals(mealType:String) {
    this.selectedMeals = [];
    this.selectedMeals = this.browsingImgs.filter(dish => dish.mealType == mealType)
    this.selectedDish = this.selectedMeals[0];
  }

}
