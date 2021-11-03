import { Component, Input, OnInit } from '@angular/core';
import { DishImage } from 'src/app/interfaces/surveyor-interfaces';
import { simpleInOutAnimation } from 'src/app/shared/animations';

@Component({
  selector: 'app-grid-overview',
  templateUrl: './grid-overview.component.html',
  styleUrls: ['./grid-overview.component.scss'],
  animations: [simpleInOutAnimation]
})
export class GridOverviewComponent implements OnInit {
  @Input() browsingImgs: DishImage[];

  selectedDish: DishImage;
  showDetails = false;
  numCol = '';

  constructor() { }

  ngOnInit(): void {
    this.numCol = (window.innerWidth || document.documentElement.clientWidth) <= 767 ? '2' : '3'
  }

  onShowDetails(selected: DishImage): void {
    this.selectedDish = selected;
    this.showDetails = true;
    // TODO: emit event to close the sidnav
  }
  onCloseDetails(): void {
    this.showDetails = false;
    this.selectedDish = null;
  }

  onResize(event): void {
    this.numCol = (window.innerWidth || document.documentElement.clientWidth) <= 767 ? '2' : '3'
  }

}
