import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 public totalItems :number = 0
 public searchTerm :string ='';
  constructor(private api:CartService) { }

  ngOnInit(): void {

    this.api.getProduct().subscribe((response:any) =>{
      this.totalItems =response.length;
    })
  }
search(event:any){
  this.searchTerm = (event.target as HTMLInputElement).value;
  this.api.search.next(this.searchTerm);
}
}
