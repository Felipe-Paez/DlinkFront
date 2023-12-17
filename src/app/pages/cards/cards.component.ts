import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  style: string | undefined;
  portfolios: any;
  reload : any;
  user: any;

  constructor(private portfolioService:PortfolioService ){}

  ngOnInit(): void {
    const item = localStorage.getItem("user");    
     this.user=item ? JSON.parse(item) : null;
    console.log(this.user);

    this.reload = localStorage.getItem("reload")
    console.log(this.reload)

    this.portfolioService.getAllPortfolios().subscribe((data) => {
       console.log(data)
       this.portfolios = data.data
    })
    if (this.user?.email && this.user?.role && this.user?.name && this.user?.lastname && this.user?._id){
    
      if(this.reload == null){
        localStorage.setItem( 'reload', "1" );
      }
      if(this.reload == "1")
      {
        window.location.reload();
        localStorage.removeItem("reload")
      }
    } 
    }
  
onShowCategory(newCategory: string): void {
  this.style = newCategory;
}
}
