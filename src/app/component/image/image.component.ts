import { Component,EventEmitter,Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})



export class ImageComponent {
  @Input() image:any
  @Output() deleteImg = new EventEmitter<string>()
  portfolioName!: string;
  logged = false;
  user!:any

  constructor(
    private activatedRoute:ActivatedRoute,
    private galleryService:GalleryService
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

      })
      if( this.portfolioName == this.user.name)
      {
        this.logged = true
      }
      
      console.log(this.portfolioName)
      console.log(this.user.name)
      console.log(this.logged)

    }
   

    delete() {
      this.deleteImg.emit(this.image._id)
      //console.log(this.image._id)
//       this.galleryService.deleteImageById(this.image._id).subscribe( ( response ) => {
//         console.log( response );
//       });
//       window.location.reload
    }
 }
