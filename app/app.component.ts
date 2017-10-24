import { Component, onDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { AuthenticationService } from './_services/index';
import { User } from '../_models/index';


@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
  isLoggedIn: any;
  loggedInSubscription: Subscription;
  loginText: string = 'Login / Register';

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
  }

  ngOnDestroy() {
    this.loggedInSubscription.unsubscribe();
  }

  loginAction() {
    if (this.isLoggedIn) {
      this.authenticationService.logout();
      this.router.navigate('/');
    } else {
      this.router.navigate(['/login']);
    }
  }
}