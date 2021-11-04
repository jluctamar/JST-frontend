import { Component, Input, OnInit } from '@angular/core';
import { DishImage } from 'src/app/interfaces/surveyor-interfaces';

@Component({
  selector: 'app-list-overview',
  templateUrl: './list-overview.component.html',
  styleUrls: ['./list-overview.component.scss']
})
export class ListOverviewComponent implements OnInit {
  @Input() browsingImgs: DishImage[];

  typesOfMeals = ["Breakfast", "Lunch","Dinner"]
  selectedMealType;
  selectedMeals: DishImage[] = [];
  selectedDish: DishImage;

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

  parseOutSelectedMeals(mealType:String) {
    this.selectedMeals = [];
    this.browsingImgs.forEach(dish => {
      if (dish.mealType == mealType) {
        this.selectedMeals.push(dish);
      }
    }  );
    this.selectedDish = this.selectedMeals[0];
  }

}
