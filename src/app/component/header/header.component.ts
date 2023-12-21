import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user!:any
  logged = false;
  authUser!:any

  constructor(
    public router: Router,
    private localstorageService: LocalstorageService
    ) {
  }

  ngOnInit(){
    if(!this.logged){
    this.user = this.localstorageService.getUser()
    }
    if(this.user){
      this.logged = true;
    }

    //if (localstorage?.email && localstorage?.role && localstorage?.name && localstorage?.lastname && localstorage?._id){
      //this.logged = true;
    //} 

  }

  createProfile(){
  
    if (this.user){
      this.router.navigate( [ 'portfolio', 'create' ] );
    }
    else{
      this.router.navigate( [ 'register' ] );
    }
    
  }

  logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.reload()
  }




}

