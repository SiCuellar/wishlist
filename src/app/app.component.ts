import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete,
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('To learn Angular'), 
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself')
  ]

  listFilter : any = '0';
  
  
  title = 'my wishlist';
  
  get visableItems() : WishItem[] {
    return this.items.filter(filters[this.listFilter]);
  };
  

}



