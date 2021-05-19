import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
})
export class SignupFormComponent implements OnInit {
  newUser: {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
  };
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  onSignup(form: {
    username: string;
    email: string;
    password: string;
    passwordconfirm: string;
  }) {
    if (form.password === form.passwordconfirm) {
      this.newUser = {
        name: form.username,
        email: form.email,
        password: form.password,
        passwordConfirm: form.passwordconfirm,
      };

      this.http
        .post(
          'https://raytro-cda-api.herokuapp.com/api/auth/signup',
          this.newUser
        )
        .subscribe((responseData) => {
          console.log(responseData);
        });

      //   this.router.navigate(['../'], { relativeTo: this.route });
    }
  }
}
