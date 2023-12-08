import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CardsComponent } from './pages/cards/cards.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { NewProductComponent } from './dashboard/create-portfolio/create-portfolio.component';

const routes: Routes = [
  { path:"home", component: HomeComponent},
  { path:"login", component: LoginComponent},
  { path:"register", component: RegisterComponent},
  { path:"cards", component: CardsComponent},
  { path:"portfolio/create", component: NewProductComponent},
  { path:"portfolio/:name", component: PortfolioComponent},
  { path:"**", redirectTo:"home", pathMatch: "full"}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
