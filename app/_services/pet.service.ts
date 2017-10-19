import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Pet } from '../_models/pet';

@Injectable()
export class PetService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('/api/pets', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/pets/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(pet: Pet) {
        return this.http.post('/api/pets', pet, this.jwt()).map((response: Response) => response.json());
    }

    update(pet: Pet) {
        return this.http.put('/api/pets/' + pet.id, pet, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/pets/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}