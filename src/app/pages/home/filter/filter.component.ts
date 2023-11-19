import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  
  @Output() showCategory= new EventEmitter<string>();

  
  categories = ["Industrial", "Minimalista", "Wabi-Sabi","Contemporáneo", "Art Deco","Retro","Rústico", "Vintage"];


  constructor(){}

  onInit(): void{}

  onShowCatergory(category : string): void{
    this.showCategory.emit(category)

  }


}
