import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  produtos: any;
  sotreService: StoreService;

  constructor(storeService: StoreService) {
    this.storeService = storeService;
   }

  ngOnInit(): void {
    this.produtos = this.sotreService.getStore().subscribe((data: any) => {
      this.produtos = data;

    })
  }

}
