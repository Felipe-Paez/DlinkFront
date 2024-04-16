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
    return this.http.get<ResponseGallery>("http://ec2-54-234-47-77.compute-1.amazonaws.com/api/gallery/"+name)
  }
  deleteImageById(id:string){
    return this.http.delete<ResponseGallery>("http://ec2-54-234-47-77.compute-1.amazonaws.com/api/gallery/"+id)
  }

  createImage(data: Gallery){
    console.log(data)
    return this.http.post<ResponseGallery>( "http://ec2-54-234-47-77.compute-1.amazonaws.com/api/gallery/", data);
  }
}
