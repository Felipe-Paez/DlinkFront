import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { ValidateFormsService } from 'src/app/services/validate-forms.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './create-portfolio.component.html',
  styleUrls: ['./create-portfolio.component.css']
})
export class NewProductComponent {
  categories = [
    { name: 'Industrial', value: 'Industrial' },
    { name: 'Minimalista', value: 'Minimalista' },
    { name: 'Wabi-Sabi', value: 'Wabi-Sabi' },
    { name: 'Contemporáneo', value: 'Contemporáneo' },
    { name: 'Art-Deco', value: 'Art-Deco' },
    { name: 'Retro', value: 'Retro' },
    { name: 'Rústico', value: 'Rústico' },
    { name: 'Vintage', value: 'Vintage' }




  ];
  portfolioForm: FormGroup = this.formBuilder.group({
    name: [ '', [ Validators.required, Validators.minLength( 3 ) ] ],
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

    this.portfolioService.createPortfolio( this.portfolioForm.value )
      .subscribe( ( response ) => {
        console.log( response );
      });

    this.portfolioForm.reset();

    setTimeout( () => {
      this.router.navigate( [ 'dashboard', 'products' ] );
    }, 1000 );
  }
}
