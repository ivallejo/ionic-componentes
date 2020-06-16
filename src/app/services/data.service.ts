import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IComponente } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOtps() {
    return this.http.get<IComponente[]>('/assets/data/menu.json');
  }
  getAlbums() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }
  getSuperHeores() {
    return this.http.get<IComponente[]>('/assets/data/superheroes.json')
              .pipe(delay(1500));
  }
}
