import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from '../models/menu';
import { Categories } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  apiUrl = 'http://127.0.0.1:8000/photos/'

  getMenu() {
    return this.http.get<Menu>(this.apiUrl + 'menu/')
  }
  
  getCategory() {
    return this.http.get<Categories>(this.apiUrl + 'category/')
  }


  constructor(private http: HttpClient) { }
}
