import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories/categories.service';
import { Categories } from '../models/categories';
import { Menu } from '../models/menu';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItem: Menu;
  category: Categories;

  constructor(private menuService: MenuService,
              private categoriesService: CategoriesService
    ) { }


  ngOnInit(): void {
    this.categoriesService.getCategory().subscribe(
      data => this.category = data
    )
  }

}
