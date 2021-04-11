import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories } from '../models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  apiUrl = 'http://127.0.0.1:8000/photos/'
  
  getCategory() {
    return this.http.get<Categories>(this.apiUrl + 'category/')
  }

  constructor(private http: HttpClient) { }
}
