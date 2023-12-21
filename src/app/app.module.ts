import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog'



import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { CardsComponent } from './pages/cards/cards.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AppRoutingModule } from './app.routing.module';
import { HeaderComponent } from './component/header/header.component';
import { CardComponent } from './component/card/card.component';
import { FilterComponent } from './pages/home/filter/filter.component';
import { FooterComponent } from './component/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsHeaderComponent } from './pages/home/products-header/products-header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { NewProductComponent } from './dashboard/create-portfolio/create-portfolio.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ImageComponent } from './component/image/image.component';
import { GallerydialogComponent } from './component/gallerydialog/gallerydialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CardsComponent,
    PortfolioComponent,
    HeaderComponent,
    CardComponent,
    FilterComponent,
    FooterComponent,
    ProductsHeaderComponent,
    NewProductComponent,
    ImageComponent,
    GallerydialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule, 
    MatButtonModule,
    MatCardModule,
    MatIconModule, 
    MatExpansionModule, 
    MatListModule, 
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule, 
    MatSnackBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    CdkAccordionModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
