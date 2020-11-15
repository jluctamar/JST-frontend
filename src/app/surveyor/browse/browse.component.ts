import { Component, OnInit } from '@angular/core';
import { DishImage } from 'src/app/interfaces/surveyor-interfaces';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {

  browsingImg: DishImage[];

  constructor() { }

  ngOnInit(): void {
    this.browsingImg = [
      {
        title: 'Diri Blanc ak Legume',
        imgSrc: '../../assets/dish1.jpg'
      },
      {
        title: 'Bannna Peze ak Griot',
        imgSrc: '../../assets/dish2.jpg'
      },
      {
        title: 'Diri Kole ak Pwa ak Griot',
        imgSrc: '../../assets/dish3.jpg'
      },
      {
        title: 'Diri Blan ak Pol',
        imgSrc: '../../assets/dish4.jpg'
      },
      {
        title: 'Pate',
        imgSrc: '../../assets/dish5.jpg'
      },
      {
        title: 'Griot',
        imgSrc: '../../assets/dish6.jpg'
      },
      {
        title: 'Diri, Pol, Piklese',
        imgSrc: '../../assets/dish7.png'
      },
      {
        title: 'Pol ak Bannan Peze ak Salad',
        imgSrc: '../../assets/dish8.jpg'
      },
      {
        title: 'All-in-One Special',
        imgSrc: '../../assets/dish9.jpg'
      },
      {
        title: 'Dish 10',
        imgSrc: '../../assets/dish10.jpg'
      },
      {
        title: 'Sos Pol',
        imgSrc: '../../assets/dish11.jpg'
      },
      {
        title: 'Diri Sos Pwa ak Legume',
        imgSrc: '../../assets/dish12.jpg'
      },
    ];
  }

}
