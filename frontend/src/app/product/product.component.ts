import { Component, OnInit } from '@angular/core';
import { ProductService } from '../providers/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private productServ: ProductService) { }

  public productList:any 

  ngOnInit(): void {
    this.productServ.getProduct().subscribe((res:any)=>{
      if(res.status == true){
        console.log(res.data);
        this.productList = res.data;
      }
      else{
        alert(res.data)
      }
    })
  }



}
