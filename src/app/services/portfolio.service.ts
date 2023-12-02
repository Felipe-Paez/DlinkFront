import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponsePortfolio } from '../interfaces/response-portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) {  }
  
  getAllPortfolios(){
    return this.http.get<ResponsePortfolio>("http://localhost:4000/api/products/")
  }
  getPortfolioByName(name:string){
    return this.http.get<ResponsePortfolio>("http://localhost:4000/api/products/"+name)
  }

}
