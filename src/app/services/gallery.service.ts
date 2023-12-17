import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gallery } from '../interfaces/gallery';
import { ResponseGallery } from '../interfaces/response-gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http:HttpClient) { }

  getAllImagesByName(name:string){
    return this.http.get<ResponseGallery>("http://localhost:4000/api/gallery/"+name)
  }
  deleteImageById(id:string){
    return this.http.delete<ResponseGallery>("http://localhost:4000/api/gallery/"+id)
  }

  createImage(data: Gallery){
    return this.http.post<ResponseGallery>( "http://localhost:4000/api/gallery/", data);
  }
}
