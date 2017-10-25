import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.userService.getById(+params.get('id')))
      .subscribe(user => {
        console.log(user);
        this.user = user;
      });
  }

  // save(): void {
  //   this.userService.update(this.user)
  //     .then(() => this.goBack());
  // }

  goBack(): void {
    this.location.back();
  }
}
