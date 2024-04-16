import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Portfolio } from '../interfaces/portfolio';

const STORE_BASE_URL = 'http://ec2-54-234-47-77.compute-1.amazonaws.com/api/';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(
    category?: string
  ): Observable<Array<Portfolio>> {
    return this.httpClient.get<Array<Portfolio>>(
      `http://ec2-54-234-47-77.compute-1.amazonaws.com/api/portfolio${
        category ? '/styles/' + category : ''
      }`
    );
  }

  getAllCategories(): Observable<Array<string>> {
    return this.httpClient.get<Array<string>>(
      `http://ec2-54-234-47-77.compute-1.amazonaws.com/api/portfolio/styles`
    );
  }
}
