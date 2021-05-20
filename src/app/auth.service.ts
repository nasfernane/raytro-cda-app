import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  userLoggedIn = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.userLoggedIn);
      }, 800);
    });
    return promise;
  }

  signUp(newUser: {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
  }) {
    this.http
      .post('https://raytro-cda-api.herokuapp.com/api/auth/signup', newUser)
      .subscribe((responseData) => {
        console.log(responseData);
        this.userLoggedIn = true;
        this.router.navigate(['../'], { relativeTo: this.route });
      });
  }

  login(user: { email: string; password: string }) {
    this.http
      .post('https://raytro-cda-api.herokuapp.com/api/auth/login', user, {
        withCredentials: true,
      })
      .subscribe((responseData) => {
        console.log(responseData);
        this.userLoggedIn = true;
        this.router.navigate(['../'], { relativeTo: this.route });
      });
  }

  logout() {
    this.userLoggedIn = false;
    this.http
      .post('https://raytro-cda-api.herokuapp.com/api/auth/logout', {})
      .subscribe((response) => {
        console.log(response);
      });
  }
}
