import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {
  public isUppercase: boolean = false;
  public heroes:Hero[]=[
    {name:'Batman',
      canFly: true,
      color:Color.black
    },
    {name:'Flash',
      canFly: false,
      color:Color.red
    },
    {name:'Allnight',
      canFly: true,
      color:Color.white
    },
    {name:'Superman',
      canFly: true,
      color:Color.blue
    },
    {name:'Robin',
      canFly: false,
      color:Color.green
    },
    {name:'Ciborg',
      canFly: true,
      color:Color.blue
    }
  ]
  toggleUppercase(): void {
    this.isUppercase =!this.isUppercase;
  }
}
