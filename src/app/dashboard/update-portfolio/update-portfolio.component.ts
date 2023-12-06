// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// import { MainComponent } from './pages/main/main.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { ProductsComponent } from './pages/products/products.component';
// import { verifyAuthGuard } from '../guards/verify-auth.guard';
// import { NewProductComponent } from './pages/products/new-product/new-product.component';
// import { UpdateProductComponent } from './pages/products/update-product/update-product.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: MainComponent,
//     children: [
//       { path: '', component: DashboardComponent },
//       { path: 'products', component: ProductsComponent },
//       { path: 'products/new', component: NewProductComponent },
//       { path: 'products/update/:id', component: UpdateProductComponent }
//     ],
//     canActivate: [ verifyAuthGuard ]
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class DashboardRoutingModule { }