import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { CommonService } from 'src/app/service/common.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
public productList :any;
public searchKey:string = '';
public filterCategory:any = '';
  constructor( private data:CommonService , private api:CartService) { }

  ngOnInit(): void {
    this.api.search.subscribe((response:any) =>{
      this.searchKey = response
    })

    this.data.getProduct().subscribe((response:any) =>
    {
      this.productList = response;
      this.filterCategory = response;
      this.productList.forEach((a:any) => {
        if(a.category === "men's clothing" || a.category === "women's clothing" ){
          a.category = 'fashion'
        }
        
        Object.assign(a, {quantity:1 , total: a.price})
      });
    })
  }

addToCart(item :any){
  this.api.addTocart(item);
}
filter(category:string){
this.filterCategory = this.productList.filter((a:any)=>{
  if(a.category == category || category == ''){
    return a;
  }
})
}
}
