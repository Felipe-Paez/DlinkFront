import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
  category: string | undefined;

  constructor(){}

  ngOnInit(): void {

  }
  
onShowCategory(newCategory: string): void {
  this.category = newCategory;
}
}
