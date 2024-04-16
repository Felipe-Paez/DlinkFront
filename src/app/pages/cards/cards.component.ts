import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Portfolio } from 'src/app/interfaces/portfolio';
import { StoreService } from 'src/app/services/store.service';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, OnDestroy {
  cols = 3;
  rowHeight: number = ROWS_HEIGHT[this.cols];
  portfolios: any;
  count = '12';
  sort = 'desc';
  category: string | undefined;
  all:string | undefined;
  portfoliosSubscription: Subscription | undefined;
  user: any;
  reload: any;

  constructor(
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.getportfolios();
    console.log(this.portfolios)

    const item = localStorage.getItem("user");    
    this.user=item ? JSON.parse(item) : null;
   console.log(this.user);

   this.reload = localStorage.getItem("reload")
   console.log(this.reload)
   if (this.user?.email && this.user?.role && this.user?.name && this.user?.lastname && this.user?._id){
    
    if(this.reload == null){
      localStorage.setItem( 'reload', "1" );
    }
    if(this.reload == "1")
    {
      window.location.reload();
      localStorage.removeItem("reload")
    }
  }
  }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[colsNum];
  }

  onItemsCountChange(count: number): void {
    this.count = count.toString();
    this.getportfolios();
  }

  onSortChange(newSort: string): void {
    this.sort = newSort;
    this.getportfolios();
  }

  onShowCategory(newCategory: string): void {
    if(newCategory == ""){
      this.category = undefined
      this.getportfolios();
    }
    else{
      this.category = newCategory;
      this.getportfolios();
    }
    
  }

  getportfolios(): void {
    this.portfoliosSubscription = this.storeService
      .getAllProducts(this.category)
      .subscribe((_portfolios) => {
        console.log(_portfolios)
        this.portfolios = _portfolios;
        console.log(this.portfolios)
      });
  }

 

  ngOnDestroy(): void {
    if (this.portfoliosSubscription) {
      this.portfoliosSubscription.unsubscribe();
    }
  }
}
