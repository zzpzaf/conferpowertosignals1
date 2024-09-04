import { Component, OnInit } from '@angular/core';
import { DataService, ICategory } from '../data.service';

export interface ISiteMenu {
  siteMenuId: number;
  siteMenuTitle: string;
}


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{

  constructor(private dataService: DataService) {} 
  
  componentName = this.constructor.name.replace('_', '');
  navMenuItems1: ICategory[] = [];


  ngOnInit(): void {
    this.dataService.getCategories().subscribe((categories: ICategory[]) => {
      this.navMenuItems1 = categories;
      // console.log(">===>> " + this.componentName + " - ngOnInit() - Categories: " +JSON.stringify(this.navMenuItems1));
    });
  }



  itemSiteMenuClicked(menuItem: ICategory): void {
    // console.log(">===>> "+'Menu Item clicked: '+ menuItem.categoryName )
    this.dataService.setCategoryId(menuItem.categoryId);
  }

}
