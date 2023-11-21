import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  category: string | undefined;
  products: any;

  constructor(private productsService:ProductsService ){}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
       console.log(data)
       this.products = data.data
    })
  }
  
onShowCategory(newCategory: string): void {
  this.category = newCategory;
}
}
