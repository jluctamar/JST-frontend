import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatRadioButton } from '@angular/material/radio';
import { DishImage } from 'src/app/interfaces/surveyor-interfaces';
import { simpleInOutAnimation } from 'src/app/shared/animations';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
  animations: [simpleInOutAnimation]
})
export class BrowseComponent implements OnInit {
  viewSelection = 'list';
  browsingImg: DishImage[];

  constructor() { }

  ngOnInit(): void {
    // TODO:fetch this data from a databese:
    this.browsingImg = [
      {
        title: 'Labouyi Avwan',
        imgSrc: '../../assets/dish10.jpg',
        description: `Ut tristique et egestas quis ipsum suspendisse ultrices. 
                        Habitant morbi tristique senectus et netus et malesuada fames ac. 
                          Ultrices gravida dictum fusce ut placerat.  `,
        price: "5.00",
        mealType: "Breakfast"
      },
      {
        title: 'Bannan ak Ze',
        imgSrc: '../../assets/dish13.jpg',
        description: `Lobortis scelerisque fermentum dui faucibus in ornare quam. 
                        Mauris ultrices eros in cursus. Sed faucibus turpis in eu.`,
        price: "7.00",
        mealType: "Breakfast"
      },
      {
        title: 'Espwageti',
        imgSrc: '../../assets/dish14.jpg',
        description: `Lobortis scelerisque fermentum dui faucibus in ornare quam. 
                        Mauris ultrices eros in cursus. Sed faucibus turpis in eu.`,
        price: "6.00",
        mealType: "Breakfast"
      },
      {
        title: 'Mayi Moulen',
        imgSrc: '../../assets/dish15.jpg',
        description: `Ut tristique et egestas quis ipsum suspendisse ultrices. 
                        Habitant morbi tristique senectus et netus et malesuada fames ac. 
                          Ultrices gravida dictum fusce ut placerat.`,
        price: "7.00",
        mealType: "Breakfast"
      },
      {
        title: 'Labouyi Bannan',
        imgSrc: '../../assets/dish16.jpg',
        description: `Ut tristique et egestas quis ipsum suspendisse ultrices. 
                        Habitant morbi tristique senectus et netus et malesuada fames ac. 
                          Ultrices gravida dictum fusce ut placerat.`,
        price: "7.00",
        mealType: "Breakfast"
      },
      {
        title: 'Pate',
        imgSrc: '../../assets/dish5.jpg',
        description: `Tellus integer feugiat scelerisque varius morbi enim nunc. 
                        Aliquam nulla facilisi cras fermentum odio eu feugiat pretium.  `,
        price: "6.00",
        mealType: "Breakfast"
      },
      {
        title: 'Diri Kole ak Pwa ak Griot',
        imgSrc: '../../assets/dish3.jpg',
        description: `Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. 
                        Sed velit dignissim sodales ut eu sem integer vitae justo.  `,
        price: "10.00",
        mealType: "Lunch"
      },
      {
        title: 'Diri Sos Pwa ak Legume',
        imgSrc: '../../assets/dish12.jpg',
        description: `Lobortis scelerisque fermentum dui faucibus in ornare quam. 
                        Mauris ultrices eros in cursus. Sed faucibus turpis in eu.`,
        price: "10.00",
        mealType: "Lunch"
      },
      {
        title: 'Diri Blanc ak Legume',
        imgSrc: '../../assets/dish1.jpg',
        description: `Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Condimentum mattis pellentesque id nibh tortor id aliquet lectus.`,
        price: "8.00",
        mealType: "Lunch"
      },
      {
        title: 'Bannna Peze ak Griot',
        imgSrc: '../../assets/dish2.jpg',
        description: ` Vitae justo eget magna fermentum. 
                        Erat nam at lectus urna. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. 
                         Etiam sit amet nisl purus.`,
        price: "10.00",
        mealType: "Lunch"
      },
      {
        title: 'Griot',
        imgSrc: '../../assets/dish6.jpg',
        description: `Erat pellentesque adipiscing commodo elit at imperdiet.
                        Enim tortor at auctor urna nunc id cursus. 
                          Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.  `,
        price: "10.00",
        mealType: "Lunch"
      },
      {
        title: 'Diri, Poul, Piklese',
        imgSrc: '../../assets/dish7.jpg',
        description: `Pretium quam vulputate dignissim suspendisse in est ante in nibh. 
                        Consequat semper viverra nam libero justo. Vulputate mi sit amet mauris. 
                          At elementum eu facilisis sed odio morbi quis. `,
        price: "10.00",
        mealType: "Lunch"
      },
      {
        title: 'Poul ak Bannan Peze ak Salad',
        imgSrc: '../../assets/dish8.jpg',
        description: `Feugiat vivamus at augue eget arcu. Platea dictumst quisque sagittis purus sit amet volutpat. 
                        Quis viverra nibh cras pulvinar mattis. 
                         Iaculis nunc sed augue lacus viverra vitae congue.`,
        price: "8.00",
        mealType: "Lunch"
      },
      {
        title: 'All-in-One Special',
        imgSrc: '../../assets/dish9.jpg',
        description: `Dolor sed viverra ipsum nunc. 
                        Maecenas ultricies mi eget mauris pharetra et ultrices. 
                          Sed arcu non odio euismod lacinia at. `,
        price: "12.00",
        mealType: "Dinner"
      },
      {
        title: 'Sos Poul',
        imgSrc: '../../assets/dish11.jpg',
        description: `Eget arcu dictum varius duis at consectetur lorem. 
                        Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus.`,
        price: "10.00",
        mealType: "Dinner"
      },
      {
        title: 'Diri Blan ak Poul',
        imgSrc: '../../assets/dish4.jpg',
        description: `Est placerat in egestas erat imperdiet sed euismod nisi porta. 
                       Etiam non quam lacus suspendisse faucibus interdum posuere lorem. `,
        price: "12.00",
        mealType: "Dinner"
      },
      {
        title: 'Bouyon',
        imgSrc: '../../assets/dish17.jpg',
        description: `Est placerat in egestas erat imperdiet sed euismod nisi porta. 
                       Etiam non quam lacus suspendisse faucibus interdum posuere lorem. `,
        price: "14.00",
        mealType: "Dinner"
      },
      {
        title: 'Tablet',
        imgSrc: '../../assets/dish18.jpg',
        description: `Est placerat in egestas erat imperdiet sed euismod nisi porta. 
                       Etiam non quam lacus suspendisse faucibus interdum posuere lorem. `,
        price: "2.00",
        mealType: "Desserts"
      },
      {
        title: 'Kremas',
        imgSrc: '../../assets/dish19.jpg',
        description: `Est placerat in egestas erat imperdiet sed euismod nisi porta. 
                       Etiam non quam lacus suspendisse faucibus interdum posuere lorem. `,
        price: "2.25",
        mealType: "Desserts"
      },
      {
        title: 'Banana beignets',
        imgSrc: '../../assets/dish20.jpg',
        description: `Est placerat in egestas erat imperdiet sed euismod nisi porta. 
                       Etiam non quam lacus suspendisse faucibus interdum posuere lorem. `,
        price: "2.25",
        mealType: "Desserts"
      },
      {
        title: 'Gateau Ananas',
        imgSrc: '../../assets/dish21.jpg',
        description: `Est placerat in egestas erat imperdiet sed euismod nisi porta. 
                       Etiam non quam lacus suspendisse faucibus interdum posuere lorem. `,
        price: "2.50",
        mealType: "Desserts"
      },

    ];
  }


  onSelectionChange(selectedView): void {
    this.viewSelection = selectedView;
  } 
}
