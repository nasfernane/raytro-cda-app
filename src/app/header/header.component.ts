import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  // simulation d'une déconnexion. A supprimer plus tard
  onLogout() {
    this.authService.logout();
    console.log('Déconnexion');
  }
}
