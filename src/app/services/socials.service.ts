import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socials } from '../interfaces/socials';
import { ResponseSocials } from '../interfaces/response-socials';

@Injectable({
  providedIn: 'root'
})
export class SocialsService {

  constructor(private http:HttpClient) {
   }

   getAllSocialsByName(name:string){
    return this.http.get<ResponseSocials>("http://ec2-54-234-47-77.compute-1.amazonaws.com/api/socials/"+name)
  };

  deleteSocialById(id:string){
    return this.http.delete<ResponseSocials>("http://ec2-54-234-47-77.compute-1.amazonaws.com/api/socials/"+id)
  };

  createSocial(data: Socials){
    console.log(data)
    return this.http.post<ResponseSocials>( "http://ec2-54-234-47-77.compute-1.amazonaws.com/api/socials/", data);
  };
}
