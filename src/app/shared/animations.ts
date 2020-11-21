import {
    animate, style, transition, trigger
} from '@angular/animations';


export const simpleInOutAnimation = [
    trigger(
        'simpleInOutAnimation', 
        [
          transition(
            ':enter', 
            [
              style({ height: 0, opacity: 0 }),
              animate('1s ease-out', 
                      style({ height: 350, opacity: 1 }))
            ]
          ),
          transition(
            ':leave', 
            [
              style({ height: 300, opacity: 1 }),
              animate('1s ease-in', 
                      style({ height: 0, opacity: 0 }))
            ]
          )
        ]
      )
]