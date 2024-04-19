import { Component,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { Portfolio } from 'src/app/interfaces/portfolio';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { GalleryService } from 'src/app/services/gallery.service';
import { MatDialog } from '@angular/material/dialog';
import { GallerydialogComponent } from 'src/app/component/gallerydialog/gallerydialog.component';
import { SocialsdialogComponent } from 'src/app/component/socialsdialog/socialsdialog.component';
import { SocialsService } from 'src/app/services/socials.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  images: any;
  portfolio: any;
  portfolioName!: string;
  logged = false;
  user!:any
  socials:any;

  constructor(
    private dialog: MatDialog,
    private portfolioService:PortfolioService,
    private activatedRoute:ActivatedRoute,
    private galleryService:GalleryService,
    private socialsService:SocialsService
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
 
       this.loadGallery(name)

      this.portfolioService.getPortfolioByName(name).subscribe((data: any) => {
        console.log(data)
        this.portfolio = data.data
  
      })
      
    })

    if( this.portfolioName == this.user.username)
  {
    this.logged = true
  }
  }


  loadGallery(name:string){
      this.galleryService.getAllImagesByName(name).subscribe((data) => {
        console.log(data)
        this.images = data.data
     })

  }

  loadSocials(name:string){
    this.socialsService.getAllSocialsByName(name).subscribe((data) => {
      console.log(data)
      this.socials = data.data
   })

}
  openSocialDialog(): void {
    const dialogRef = this.dialog.open(SocialsdialogComponent, {
      width: "310px",
      height: "180px"
    })

    dialogRef.afterClosed().subscribe((result) => {
      this.loadGallery(this.portfolioName)
      console.log("The dialog was closed");
    })
   }
   


   openDialog(): void {
    const dialogRef = this.dialog.open(GallerydialogComponent, {
      width: "310px",
      height: "180px"
    })

    dialogRef.afterClosed().subscribe((result) => {
      this.loadGallery(this.portfolioName)
      console.log("The dialog was closed");
    })
   }

   delete(id:string) {
    console.log(id)
    this.galleryService.deleteImageById(id).subscribe( ( response ) => {
    console.log( response );
    this.loadGallery(this.portfolioName)
    });

  } 
  

}
