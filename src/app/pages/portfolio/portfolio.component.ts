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
  logged = false;
  user!:any

  constructor(
    private portfolioService:PortfolioService,
    private activatedRoute:ActivatedRoute
    ){}


  ngOnInit(): void {

    const item = localStorage.getItem("user");    
    this.user=item ? JSON.parse(item) : null;

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

    if( this.portfolioName == this.user.name)
  {
    this.logged = true
  }
  }


  
  

}
