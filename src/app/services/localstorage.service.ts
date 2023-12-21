import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  userData!: any

  constructor(
  ) { 
    this.getUser()
  }

  get user():any{
    return this.user
     }

  getUser(){
    const item = localStorage.getItem("user");    
    this.userData=item ? JSON.parse(item) : null;
    console.log(this.userData);

    return this.userData
  }
}
