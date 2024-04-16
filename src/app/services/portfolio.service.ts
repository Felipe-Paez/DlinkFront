import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Portfolio } from '../interfaces/portfolio';
import { ResponsePortfolio } from '../interfaces/response-portfolio';

const headers = ''

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {
  token: string;
  headers: HttpHeaders;

  constructor(private http:HttpClient) { 
    const token = localStorage.getItem( 'token' );
    this.token = token ? token : '';
    this.headers = new HttpHeaders().set( 'X-Token', this.token );
   }
  
  getAllPortfolios(){
    return this.http.get<ResponsePortfolio>("http://ec2-54-234-47-77.compute-1.amazonaws.com/api/portfolio")
  }
  getPortfolioByName(name:string){
    return this.http.get<ResponsePortfolio>("http://ec2-54-234-47-77.compute-1.amazonaws.com/api/portfolio/profile/"+name)
  }

  createPortfolio(data: Portfolio){
    return this.http.post<ResponsePortfolio>( 
      "http://ec2-54-234-47-77.compute-1.amazonaws.com/api/portfolio", 
      data, 
      { headers: this.headers } 
    );
  }
  }


