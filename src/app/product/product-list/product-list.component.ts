import { ProductService } from './../../services/product.service';
import { IProduct } from './../product';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title: string = "List Product";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = 'Cat';
   errorMessage: string;
 
  //declared product array with any
  products: IProduct[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    }
  ];
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(products=>this.products=products);
  }
  onRatingClicked(message: string): void {
    this.title = 'Product List: ' + message;
  }
}
