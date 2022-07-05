import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public product : any = [];
  public grandTotal : number = 0;
  constructor( private api:CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe((response:any) =>{
      this.product = response;
      this.grandTotal = this.api.getTotalPrice();
    })
  }
  removeItem(item:any){
    this.api.removeCartItem(item);
  }
 emptyCart(){
  this.api.removeAllCart();
 }
}
