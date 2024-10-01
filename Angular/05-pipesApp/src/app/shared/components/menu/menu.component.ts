 import { MenubarModule } from 'primeng/menubar';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
//import { MenubarModule } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {
  public menuItems: MenubarModule[] = [];
  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [{
          label: 'Textos y fechas',
          icon: 'pi pi-align-left',
          routerLink: '/'
        }, {
          label: 'Números',
          icon: 'pi pi-dollar',
          routerLink: 'numbers'
        }, {
          label: 'No Comunes',
          icon: 'pi pi-globe',
          routerLink: 'uncommon'
        }]
      },
      {
        label: 'Pipes Personalizados',
        icon: 'pi pi-cog',
        items:[{
          label: 'Custom Pipes',
          icon: 'pi pi-cog',
          routerLink: 'custom'
        }]
      }
    ]
  }
}
