import { Component, OnInit } from '@angular/core';
import { DataService, ICategory } from '../data.service';
import { CommonModule } from '@angular/common';

export interface ISiteMenu {
  siteMenuId: number;
  siteMenuTitle: string;
}


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{

  constructor(private dataService: DataService) {} 
  
  componentName = this.constructor.name.replace('_', '');
  navMenuItems1: ICategory[] = [];
  selectedItem: number | null = null;

  ngOnInit(): void {
    this.dataService.getCategories().subscribe((categories: ICategory[]) => {
      this.navMenuItems1 = categories;
      // console.log(">===>> " + this.componentName + " - ngOnInit() - Categories: " +JSON.stringify(this.navMenuItems1));
    });
  }



  itemSiteMenuClicked(menuItem: ICategory, i: number): void {
    // console.log(">===>> "+'Menu Item clicked: ' + i + " - " + menuItem.categoryName )
    this.dataService.setCategoryId(menuItem.categoryId);
    this.selectedItem = i;
  }

}
