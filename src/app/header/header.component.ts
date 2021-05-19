import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  userLoggedIn: boolean;

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.userLoggedIn = this.authService.userLoggedIn;
  }

  // simulation d'une déconnexion. A supprimer plus tard
  onLogout() {
    this.authService.logout();
    console.log('Déconnexion');
  }
}
