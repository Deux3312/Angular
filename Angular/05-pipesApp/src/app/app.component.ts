import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private primegConfig: PrimeNGConfig){}
  ngOnInit()
  {
    this.primegConfig.ripple=true;
  }

  public title = 'BraYaN MeDinA';

}
