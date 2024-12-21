import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {
  constructor(private autService:AuthService,
    private router:Router
  ){}
  get user():User| undefined{
    return this.autService.currentUser;
  }
  onLogout()
  {
    this.autService.logout();
    this.router.navigate(['/auth/login'])
  }
}
