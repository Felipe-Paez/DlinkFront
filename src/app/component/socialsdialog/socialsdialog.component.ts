import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialsService } from 'src/app/services/socials.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-socialsdialog',
  templateUrl: './socialsdialog.component.html',
  styleUrls: ['./socialsdialog.component.css']
})
export class SocialsdialogComponent {
  portfolioName!: string;
  imageData!: string;
  user!: User;
  styles = [
    { name: 'Facebook', value: 'Facebook' },
    { name: 'Twitter', value: 'Twitter' },
    { name: 'Instagram', value: 'Instagram' },
    { name: 'LinkedIn', value: 'Linkedin' },
  ];
  socialsForm: FormGroup = this.formBuilder.group({
    url: [''],
    social:['']
  });
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private socialsService: SocialsService
  ) {}

  ngOnInit(): void {
    const item = localStorage.getItem("user");    
    this.user=item ? JSON.parse(item) : null;
    console.log(this.user.name)
  }
 


  upload() {
    console.log(this.socialsForm.value)
    console.log(this.user.name)
    let data = Object.assign( {}, this.socialsForm.value, this.user)
    delete data._id
    delete data.lastname
    delete data.email
    delete data.role
    console.log(data)

    this.socialsService.createSocial(data).subscribe( ( response ) => {
      console.log( response );
    });
  }
}
