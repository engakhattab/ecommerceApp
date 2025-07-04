import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  products:Iproduct[]
  constructor() {
    this.products = [
      { id: 1, name: 'Product 1', price: 100, quantity: 10, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 1 },
      { id: 2, name: 'Product 2', price: 200, quantity: 20, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 2 },
      { id: 3, name: 'Product 3', price: 300, quantity: 30, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 3 },
      { id: 4, name: 'Product 4', price: 100, quantity: 10, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 4 },
      { id: 5, name: 'Product 5', price: 100, quantity: 10, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 2 },
      { id: 6, name: 'Product 6', price: 10087, quantity: 10, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 7 },
      { id: 7, name: 'Product 7', price: 1008, quantity: 10, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 3 },
      { id: 8, name: 'Product 8', price: 1060, quantity: 10, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 5 },
      { id: 9, name: 'Product 9', price: 1070, quantity: 10, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 4 },
      { id: 10, name: 'Product 10', price: 10560, quantity: 10, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 1 },
      { id: 11, name: 'Product 11', price: 1004, quantity: 10, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 2 },
      { id: 12, name: 'Product 12', price: 1070, quantity: 10, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 5 },
    ];
  }
}
