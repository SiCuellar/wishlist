import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
    new WishItem('To learn Angular'), 
    new WishItem('Get Coffee', true),
    new WishItem('find grass that cuts itself')
  ]
  title = 'my wishlist';
}

