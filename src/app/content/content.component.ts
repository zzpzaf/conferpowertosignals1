import { Component, effect, inject } from '@angular/core';
import { IItem } from '../data.service';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  constructor() {
    effect(() => {
      this.items = this.contentService.$items();
    });
  }

  private contentService = inject(ContentService);

  componentName = this.constructor.name.replace('_', '');
  contentHeader = 'Items of Category ';
  items!: IItem[];

}
