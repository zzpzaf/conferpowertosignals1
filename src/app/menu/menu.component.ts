import { Component, effect, inject, OnInit } from '@angular/core';
import { ICategory } from '../data.service';
import { CommonModule } from '@angular/common';
import { ContentService } from '../content.service';

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
export class MenuComponent {

  constructor() {
    effect(() => {
        this.navMenuItems1 = this.contentService.$categories();
    });
  } 

  private contentService = inject(ContentService);
 
  componentName = this.constructor.name.replace('_', '');
  navMenuItems1: ICategory[] = [];
  selectedItem: number | null = null;

  itemSiteMenuClicked(menuItem: ICategory, i: number): void {
    this.contentService.signalItems(menuItem);
    this.selectedItem = i;
  }

}
