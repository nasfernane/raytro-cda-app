import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  constructor(private AuthService: AuthService) {}

  ngOnInit(): void {}

  onLogin() {
    this.AuthService.login();
    console.log('Connexion');
  }
}
