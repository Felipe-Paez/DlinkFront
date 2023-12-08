import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userData!:any

  constructor(
    public router: Router
    ) {
  }

  ngOnInit(){

    const user = localStorage.getItem("user");
    const data = user?user:'';
    const userData = (typeof data == 'string')?{}:JSON.parse(data);
    console.log(userData);
  }

  createProfile(){

    if( this.userData.hasOwnProperty( 'email' ) ) {
      console.log("1")
      //this.router.navigate( [ 'portfolio', 'create' ] );
    }
    else {
      console.log("2")
      //this.router.navigate( [ 'register' ] );
    }
    
  }
}

