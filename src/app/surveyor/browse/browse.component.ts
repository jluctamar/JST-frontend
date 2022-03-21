import { Component, OnInit } from '@angular/core';
import { DishImage } from 'src/app/interfaces/surveyor-interfaces';
import { simpleInOutAnimation } from 'src/app/shared/animations';
import { environment } from 'src/environments/environment';



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
        imgSrc: environment.production ? 'https://drive.google.com/uc?id=1Xp-BpBSJqaEGtnelb1yVVZmw3mKDNfDl': '/assets/dish10.jpg',
        description: `Ut tristique et egestas quis ipsum suspendisse ultrices. 
                        Habitant morbi tristique senectus et netus et malesuada fames ac. 
                          Ultrices gravida dictum fusce ut placerat.  `,
        price: "5.00",
        mealType: "Breakfast"
      },
      {
        title: 'Bannan ak Ze',
        imgSrc: environment.production ? 'https://drive.google.com/uc?id=1WX9Dxf6RF_jRMUMNLL_7FDO8Lq2mIQk-' : '/assets/dish13.jpg',
        description: `Lobortis scelerisque fermentum dui faucibus in ornare quam. 
                        Mauris ultrices eros in cursus. Sed faucibus turpis in eu.`,
        price: "7.00",
        mealType: "Breakfast"
      },
      {
        title: 'Espwageti',
        imgSrc: environment.production ? 'https://drive.google.com/uc?id=1bAf5U-4vVfZm4v168voDyR_myeLnXI47' : '/assets/dish14.jpg',
        description: `Lobortis scelerisque fermentum dui faucibus in ornare quam. 
                        Mauris ultrices eros in cursus. Sed faucibus turpis in eu.`,
        price: "6.00",
        mealType: "Breakfast"
      },
      {
        title: 'Mayi Moulen',
        imgSrc: environment.production ? 'https://drive.google.com/uc?id=1cc_CY432cIuRlqFdwOr5uNIy30SRnw8o' : '/assets/dish15.jpg',
        description: `Ut tristique et egestas quis ipsum suspendisse ultrices. 
                        Habitant morbi tristique senectus et netus et malesuada fames ac. 
                          Ultrices gravida dictum fusce ut placerat.`,
        price: "7.00",
        mealType: "Breakfast"
      },
      {
        title: 'Labouyi Bannan',
        imgSrc: environment.production ? 'https://drive.google.com/uc?id=1Rzi8-0DnYwqrrW2noqCb5XTUYNU9j8aW' : '/assets/dish16.jpg',
        description: `Ut tristique et egestas quis ipsum suspendisse ultrices. 
                        Habitant morbi tristique senectus et netus et malesuada fames ac. 
                          Ultrices gravida dictum fusce ut placerat.`,
        price: "7.00",
        mealType: "Breakfast"
      },
      {
        title: 'Pate',
        imgSrc: environment.production ? 'https://drive.google.com/uc?id=1Yzppix62vZ5Ea4gvutps01BQ-CkcWOqe' : '/assets/dish5.jpg',
        description: `Tellus integer feugiat scelerisque varius morbi enim nunc. 
                        Aliquam nulla facilisi cras fermentum odio eu feugiat pretium.  `,
        price: "6.00",
        mealType: "Breakfast"
      },
      {
        title: 'Diri Kole ak Pwa ak Griot',
        imgSrc: environment.production ? 'https://drive.google.com/uc?id=199_jfci05inEauqOxA4GBpRZkFeyFQYu' : '/assets/dish3.jpg',
        description: `Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. 
                        Sed velit dignissim sodales ut eu sem integer vitae justo.  `,
        price: "10.00",
        mealType: "Lunch"
      },
      {
        title: 'Diri Sos Pwa ak Legume',
        imgSrc: environment.production ? 'https://drive.google.com/uc?id=16wbFcjWNjJPpdQFOfMKifGv4SZucHGCv' : '/assets/dish12.jpg',
        description: `Lobortis scelerisque fermentum dui faucibus in ornare quam. 
                        Mauris ultrices eros in cursus. Sed faucibus turpis in eu.`,
        price: "10.00",
        mealType: "Lunch"
      },
      {
        title: 'Diri Blanc ak Legume',
        imgSrc: environment.production ? 'https://drive.google.com/uc?id=182-3lWO844KNntiKQtZH1yyLpDNTEvLt' : '/assets/dish1.jpg',
        description: `Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Condimentum mattis pellentesque id nibh tortor id aliquet lectus.`,
        price: "8.00",
        mealType: "Lunch"
      },
      {
        title: 'Bannna Peze ak Griot',
        imgSrc: environment.production ? 'https://drive.google.com/uc?id=1x1oO0JimAsSqyNNkuPzj3ydoEXIQxMdI' : '/assets/dish2.jpg',
        description: ` Vitae justo eget magna fermentum. 
                        Erat nam at lectus urna. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. 
                         Etiam sit amet nisl purus.`,
        price: "10.00",
        mealType: "Lunch"
      },
      {
        title: 'Griot',
        imgSrc: environment.production ? 'https://drive.google.com/uc?id=1qhzyJtKegA_YJI2YKpl0zy0DJcXlp0_w' : '/assets/dish6.jpg',
        description: `Erat pellentesque adipiscing commodo elit at imperdiet.
                        Enim tortor at auctor urna nunc id cursus. 
                          Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.  `,
        price: "10.00",
        mealType: "Lunch"
      },
      {
        title: 'Diri, Poul, Piklese',
        imgSrc: environment.production ? 'https://drive.google.com/uc?id=1--__m_f9_moL4mWA5eVl3hQapZVsPd83' : '/assets/dish7.jpg',
        description: `Pretium quam vulputate dignissim suspendisse in est ante in nibh. 
                        Consequat semper viverra nam libero justo. Vulputate mi sit amet mauris. 
                          At elementum eu facilisis sed odio morbi quis. `,
        price: "10.00",
        mealType: "Lunch"
      },
      {
        title: 'Poul ak Bannan Peze ak Salad',
        imgSrc: environment.production ? 'https://drive.google.com/uc?id=1tTZIcj8lwJrEz6z75th1kZWEN1CP3fS5' : '/assets/dish8.jpg',
        description: `Feugiat vivamus at augue eget arcu. Platea dictumst quisque sagittis purus sit amet volutpat. 
                        Quis viverra nibh cras pulvinar mattis. 
                         Iaculis nunc sed augue lacus viverra vitae congue.`,
        price: "8.00",
        mealType: "Lunch"
      },
      {
        title: 'All-in-One Special',
        imgSrc: environment.production ? 'https://drive.google.com/uc?id=1hkY6Exrd8oHW_PJeUINh3a4BvcJq_pvm' : '/assets/dish9.jpg',
        description: `Dolor sed viverra ipsum nunc. 
                        Maecenas ultricies mi eget mauris pharetra et ultrices. 
                          Sed arcu non odio euismod lacinia at. `,
        price: "12.00",
        mealType: "Dinner"
      },
      {
        title: 'Sos Poul',
        imgSrc: environment.production ? 'https://drive.google.com/uc?id=1DxDPLR5vaLKQnDV0y1Eqn1Fj2ZS2wRQ4' : '/assets/dish11.jpg',
        description: `Eget arcu dictum varius duis at consectetur lorem. 
                        Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus.`,
        price: "10.00",
        mealType: "Dinner"
      },
      {
        title: 'Diri Blan ak Poul',
        imgSrc: environment.production ? 'https://drive.google.com/uc?id=1WjrR912YaqikKmr4KvUGTBLEru2dQU8G' : '/assets/dish4.jpg',
        description: `Est placerat in egestas erat imperdiet sed euismod nisi porta. 
                       Etiam non quam lacus suspendisse faucibus interdum posuere lorem. `,
        price: "12.00",
        mealType: "Dinner"
      },
      {
        title: 'Bouyon',
        imgSrc: environment.production ? 'https://drive.google.com/uc?id=1ufSqAoR_NjkAXbRypPzYSS0nDjpUw92B' : '/assets/dish17.jpg',
        description: `Est placerat in egestas erat imperdiet sed euismod nisi porta. 
                       Etiam non quam lacus suspendisse faucibus interdum posuere lorem. `,
        price: "14.00",
        mealType: "Dinner"
      },
      {
        title: 'Tablet',
        imgSrc: environment.production ? 'https://drive.google.com/uc?id=1KMSPxVcBlG0xp8srNjzkrQctTJUFj3-1' : '/assets/dish18.jpg',
        description: `Est placerat in egestas erat imperdiet sed euismod nisi porta. 
                       Etiam non quam lacus suspendisse faucibus interdum posuere lorem. `,
        price: "2.00",
        mealType: "Desserts"
      },
      {
        title: 'Kremas',
        imgSrc: environment.production ? 'https://drive.google.com/uc?id=1ENUej0wWsbpaM62qfIuLrzqI_H4frj7c' : '/assets/dish19.jpg',
        description: `Est placerat in egestas erat imperdiet sed euismod nisi porta. 
                       Etiam non quam lacus suspendisse faucibus interdum posuere lorem. `,
        price: "2.25",
        mealType: "Desserts"
      },
      {
        title: 'Banana beignets',
        imgSrc: environment.production ? 'https://drive.google.com/uc?id=1_Ugd5Jm9e6kDu6NzkJDiYo9DiCNZfupU' : '/assets/dish20.jpg',
        description: `Est placerat in egestas erat imperdiet sed euismod nisi porta. 
                       Etiam non quam lacus suspendisse faucibus interdum posuere lorem. `,
        price: "2.25",
        mealType: "Desserts"
      },
      {
        title: 'Gateau Ananas',
        imgSrc: environment.production ? 'https://drive.google.com/uc?id=1iENYzdk_HOP2UjocgpmOdYrielvstgP0' : '/assets/dish21.jpg',
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
