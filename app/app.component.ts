import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { AuthenticationService } from './_services/index';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
  isLoggedIn: any;
  loggedInSubscription: Subscription;
  loginText: string = 'Login / Register';
  copywrite: string = new Date().getFullYear();

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loggedInSubscription = this.authenticationService
      .getLoggedIn()
      .subscribe(loggedIn => {
          this.isLoggedIn = loggedIn;
          this.loginText = this.isLoggedIn ? 'Logout' : 'Login / Register';
      });
    console.log(this.router.url);
  }

  ngOnDestroy() {
    this.loggedInSubscription.unsubscribe();
  }

  loginAction() {
    if (this.isLoggedIn) {
      this.authenticationService.logout();
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  isHidden() {
    const list = ["/", "#", ""];
    return !(list.indexOf(this.router.url) > -1);
  }
}