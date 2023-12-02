import { Component,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { Portfolio } from 'src/app/interfaces/portfolio';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portfolio: any;
  portfolioName!: string;

  constructor(
    private portfolioService:PortfolioService,
    private activatedRoute:ActivatedRoute
    ){}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      tap( response => {
        console.log(response)

        return response
      }),
      map(response => response ["name"])
    ).subscribe( name => {
      console.log( name );

      this.portfolioName = name

      this.portfolioService.getPortfolioByName(name).subscribe((data: any) => {
        console.log(data)
        this.portfolio = data.data
  
      })
      
    })
  }

}
