import { Component } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { HighlightCard } from '../../directives/highlight-card';
import { SquarePipe } from '../../pipes/square-pipe';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule,HighlightCard,SquarePipe],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  totalOrderPrice:number=0;
  products:Iproduct[]
  categories:Icategory[]
  filteredProducts: Iproduct[] 
  selectedCategoryId: number = 0;
  mydate: Date = new Date();
  num: number = 5;
  constructor() {
    this.products = [
      { id: 1, name: 'OPPO', price: 100, quantity: 1, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 1 },
      { id: 2, name: 'Realme', price: 200, quantity: 0, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 1 },
      { id: 3, name: 'Iphone', price: 300, quantity: 30, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 1 },
      { id: 4, name: 'Dell', price: 100, quantity: 4, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 2 },
      { id: 5, name: 'HP', price: 100, quantity: 2, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 2 },
      { id: 6, name: 'Lenovo', price: 10087, quantity: 1, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 2 },
      { id: 7, name: 'Infinix', price: 1008, quantity: 16, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 1 },
      { id: 8, name: 'Huawawi', price: 1060, quantity: 50, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 1 },
      { id: 9, name: 'samsung', price: 1070, quantity: 87, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 1 },
      { id: 10, name: 'pixel', price: 10560, quantity: 2, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 1 },
      { id: 11, name: 'mac', price: 1004, quantity: 0, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId: 2 },
      { id: 12, name: 'Samsung Tablet', price: 1070, quantity: 1, imgUrl: 'https://th.bing.com/th/id/OIP.qpnqrW5DFm1lqZw_TOPYLgHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', catId:3 },
    ];
    this.categories = [
      { id: 1, name: 'Mobile Phones'},
      { id: 2, name: 'Laptops'},
      { id: 3, name: 'Tablets'},
    ]
    this.filteredProducts = this.products; // Initially show all products
      

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
  filterProducts() {
    if (this.selectedCategoryId == 0) {
      this.filteredProducts = this.products; // Show all products if no category is selected
    } else {
      this.filteredProducts = this.products.filter(prd => prd.catId == this.selectedCategoryId);
    }
  }

}
