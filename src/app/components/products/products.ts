import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  totalOrderPrice:number=0;
  products:Iproduct[]
  categories:Icategory[]
  selectedCategoryId: number = 0;
  constructor() {
    this.products = [
      { id: 1, name: 'Product 1', price: 100, quantity: 1, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 1 },
      { id: 2, name: 'Product 2', price: 200, quantity: 0, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 2 },
      { id: 3, name: 'Product 3', price: 300, quantity: 30, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 3 },
      { id: 4, name: 'Product 4', price: 100, quantity: 4, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 4 },
      { id: 5, name: 'Product 5', price: 100, quantity: 2, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 2 },
      { id: 6, name: 'Product 6', price: 10087, quantity: 1, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 7 },
      { id: 7, name: 'Product 7', price: 1008, quantity: 16, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 3 },
      { id: 8, name: 'Product 8', price: 1060, quantity: 50, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 5 },
      { id: 9, name: 'Product 9', price: 1070, quantity: 87, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 4 },
      { id: 10, name: 'Product 10', price: 10560, quantity: 2, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 1 },
      { id: 11, name: 'Product 11', price: 1004, quantity: 0, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 2 },
      { id: 12, name: 'Product 12', price: 1070, quantity: 1, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 5 },
    ];
    this.categories = [
      { id: 1, name: 'Category 1'},
      { id: 2, name: 'Category 2'},
      {id: 3, name: 'Category 3'},
    ]
      

  }
  //Event binding
  buy(count: string, price: number) {
    const countValue = parseInt(count, 10);
    if (isNaN(countValue) || countValue <= 0) {
      alert('Please enter a valid quantity.');
      return;
    }
    const orderPrice = countValue * price;
    this.totalOrderPrice += orderPrice;
    alert(`Total Order Price: ${this.totalOrderPrice}`);
  }
  change() {
    this.selectedCategoryId = 3;
  }
  trackItem(index: number, item: Iproduct) {
    return item.id; // or any unique identifier for the item
  }
}
