import { Component, OnInit } from '@angular/core';
import { Categories } from '../models/categories';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  category: Categories;

  constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(
      data => this.category = data
    )
  }

}
