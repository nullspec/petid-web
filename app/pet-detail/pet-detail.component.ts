import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Pet }        from '../_models/pet';
import { PetService } from '../_services/pet.service';

@Component({
  moduleId: module.id,
  selector: 'pet-detail',
  templateUrl: './pet-detail.component.html'
})
export class PetDetailComponent implements OnInit {
  pet: Pet;

  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.petService.getById(+params.get('id')))
      .subscribe(pet => this.pet = pet);
  }

  // save(): void {
  //   this.petService.update(this.pet)
  //     .then(() => this.goBack());
  // }

  goBack(): void {
    this.location.back();
  }
}
