import { Component } from '@angular/core';
import { DataService, IItem } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

  constructor(private dataService: DataService) {

    this.itemsSubscription = this.dataService.getCategoryId().subscribe({
      next: (catId: number) => {this.categoryId = catId;
        // console.log(">===>>" + this.componentName + " CategoryId: " + categoryId);
        if (this.categoryId > 0) this.getCategoryItems(this.categoryId);
      },
      error: (error) => {
        console.log(">===>>" + this.componentName  + ' - ' + error +  " - " + 'Error getting Items.');
      }
  });
  } 

  componentName = this.constructor.name.replace('_', '');
  contentHeader = 'Items of Category ';
  categoryId: number = 0;
  items!: IItem[];
  itemsSubscription!: Subscription;


  getCategoryItems(catId: number): void {
    this.dataService.getItems(catId).subscribe((items: IItem[]) => {
      this.items = items;
      // console.log(">===>> " + this.componentName + " - getCategoryItems() - Items: " + JSON.stringify(this.items));
    });
  }

  ngOnDestroy() {
    if (!!this.itemsSubscription) this.itemsSubscription.unsubscribe();
  }

}
