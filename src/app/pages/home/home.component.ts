import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  category: string | undefined;

  constructor(){}

  ngOnInit(): void {

  }
  
onShowCategory(newCategory: string): void {
  this.category = newCategory;
}
}
