import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  category: string | undefined;
  portfolios: any;

  constructor(private portfolioService:PortfolioService ){}

  ngOnInit(): void {
    this.portfolioService.getAllPortfolios().subscribe((data) => {
       console.log(data)
       this.portfolios = data.data
    })
  }
  
onShowCategory(newCategory: string): void {
  this.category = newCategory;
}
}
