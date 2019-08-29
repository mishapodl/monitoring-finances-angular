import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/models/category.model';
import { CategoriesService } from '../shared/services/categories.service';

@Component({
  selector: 'app-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.css']
})
export class RecordsPageComponent implements OnInit {
  categories: any = [];
  isLoaded = false;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit() {
    this.categoriesService
      .getCategories()
      .subscribe((categories) => {
        this.categories =  Array.of(categories);
        this.isLoaded = true;
      });
  }

  newCategoryAdded(category: Category) {
    this.categories.push(console.log(category));
  }

  categoryWasEdited(category: Category) {
    const idx = this.categories.findIndex(c => c.id === category.id);
    this.categories[idx] = category;
  }
}
