import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items : WishItem[] = [
    // new WishItem('To learn Angular'), 
    // new WishItem('Get Coffee', true),
    // new WishItem('Find grass that cuts itself')
  ]

  newWishText = ''
  
  title = 'my wishlist';

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
    //todo :add wish to items array
    // clear the text box

  }

  toggleItem(item : WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item)
  }

}



