import { Component } from '@angular/core';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {
  public isUppercase: boolean = false;
  toggleUppercase(): void {
    this.isUppercase =!this.isUppercase;
  }
}
