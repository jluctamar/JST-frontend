import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DishImage } from 'src/app/interfaces/surveyor-interfaces';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  
  @Input() dish: DishImage;
  @Output() closeDetails = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }


  onClose(): void {
    this.closeDetails.emit();
  }

}
