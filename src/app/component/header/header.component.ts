import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user!:any
  logged = false;

  constructor(
    public router: Router
    ) {
  }

  ngOnInit(){
    const item = localStorage.getItem("user");    
     this.user=item ? JSON.parse(item) : null;
    console.log(this.user);

    if (this.user?.email && this.user?.role && this.user?.name && this.user?.lastname && this.user?._id){
      this.logged = true;
    }
  }

  createProfile(){
  
    if (this.user?.email && this.user?.role && this.user?.name && this.user?.lastname && this.user?._id){
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

