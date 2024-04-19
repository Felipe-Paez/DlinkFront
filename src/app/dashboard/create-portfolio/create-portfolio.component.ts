import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Portfolio } from 'src/app/interfaces/portfolio';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { ValidateFormsService } from 'src/app/services/validate-forms.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './create-portfolio.component.html',
  styleUrls: ['./create-portfolio.component.css']
})
export class NewProductComponent {
   user:any;
   portfolioInfo!:Portfolio;

  ngOnInit():void{
    const item = localStorage.getItem("user");    
    this.user=item ? JSON.parse(item) : null;
  }

  styles = [
    { name: 'Industrial', value: 'Industrial' },
    { name: 'Minimalist', value: 'Minimalist' },
    { name: 'Wabi-Sabi', value: 'Wabi-Sabi' },
    { name: 'Contempory', value: 'Contemporary' },
    { name: 'Art-Deco', value: 'Art-Deco' },
    { name: 'Retro', value: 'Retro' },
    { name: 'Rustic', value: 'Rustic' },
    { name: 'Vintage', value: 'Vintage' }




  ];
  portfolioForm: FormGroup = this.formBuilder.group({
    price: [ '', [ Validators.required, this.validateForm.validatePrice ] ],
    // quantity: [ '', [ Validators.required, this.validateForm.validateQuantity ] ],
    urlpfp: [ '', this.validateForm.validateNormalUrl ],
    urlbanner: [ '', this.validateForm.validateNormalUrl ],
    style: [ '' ],
    description: [ '', [ this.validateForm.validateDescription ] ]
  });

  constructor(
    private formBuilder: FormBuilder,
    private portfolioService: PortfolioService,
    private router: Router,
    private validateForm: ValidateFormsService
  ) {}


  createPortfolio() {
    console.log( this.portfolioForm.value ); 

    this.portfolioInfo = this.portfolioForm.value
    
    this.portfolioInfo.name = this.user.username
    
    this.portfolioService.createPortfolio( this.portfolioInfo )
      .subscribe( ( response ) => {
        console.log( response );
      });

    this.portfolioForm.reset();

    setTimeout( () => {
      this.router.navigate( [ 'portfolio', this.user.username ] );
    }, 1000 );
  }
}
