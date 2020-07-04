import {Component} from '@angular/core';
import {Product} from './Product.interface';

@Component({
    selector: 'pm-products',
    templateUrl: './ProductList.component.html'
})

export class ProductListComponent implements Product{

    //The interface member variables needs o define again in the implemented class.
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    imageUrl: string;
    //The interface getProduct method should implement, otherwise it gives compile error.
    getProduct():void
    {

    }
  
  pageTitle : string = "Product List..!";
    imageWidth: number = 30;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';

    //Same like Java Interface type instance holds the implmented Class object.
    //productObj: Product = new ProductListComponent();

    Product: any[]= [
        {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2019",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "assets/images/leaf_rake.png"
      },
      {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2019",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "assets/images/garden_cart.png"
      },
      {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2019",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "assets/images/hammer.png"
      }];

      showOrHideImage(): void
      {
        this.showImage = !this.showImage;
      }

      getlistFilter()
      {
        return this.listFilter;
      }
      setlistFilter(value: string)
      {
        this.listFilter=value;
      }
}