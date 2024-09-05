import { inject, Injectable, signal } from '@angular/core';
import { DataService, ICategory, IItem } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor() {
    if (this.$categories().length == 0) this.signalCategories();
  }

  private dataService = inject(DataService);
  componentName = this.constructor.name.replace('_', '');

  public $categories = signal<ICategory[]>([]);
  public $items = signal<IItem[]>([]);

  public signalCategories(): void {
    this.dataService.getCategories()
      .subscribe((categories: ICategory[]) => {
        this.$categories.set(categories);
    });
  }

  public signalItems(category: ICategory): void {
    this.dataService
      .getItems(category.categoryId)
      .subscribe((items: IItem[]) => {
        this.$items.set(items);
      });
  }
}
