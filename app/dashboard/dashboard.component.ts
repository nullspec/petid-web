import { Component, OnInit } from '@angular/core';

import { User, Pet } from '../_models/index';
import { UserService, PetService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    pets: Pet[] = [];

    constructor(private userService: UserService, private petService: PetService) { }

    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.loadAllUsers();
        this.loadPets();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    private loadPets() {
        this.petService.getAll().subscribe(pets => { this.pets = pets; });
    }
}