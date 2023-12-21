import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, tap } from 'rxjs';
import { GalleryService } from 'src/app/services/gallery.service';
import { Gallery } from 'src/app/interfaces/gallery';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-gallerydialog',
  templateUrl: './gallerydialog.component.html',
  styleUrls: ['./gallerydialog.component.css'],
})
export class GallerydialogComponent {
  portfolioName!: string;
  imageData!: string;
  user!: User;

  galleryForm: FormGroup = this.formBuilder.group({
    url: ['']
  });

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private galleryService: GalleryService
  ) {}

  ngOnInit(): void {
    const item = localStorage.getItem("user");    
    this.user=item ? JSON.parse(item) : null;
    console.log(this.user.name)
  }
 


  upload() {
    console.log(this.galleryForm.value)
    console.log(this.user.name)
    let data = Object.assign( {}, this.galleryForm.value, this.user)
    delete data._id
    delete data.lastname
    delete data.email
    delete data.role
    console.log(data)

    this.galleryService.createImage(data).subscribe( ( response ) => {
      console.log( response );
    });
  }
}
