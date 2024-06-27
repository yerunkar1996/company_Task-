import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/providers/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private productServ : ProductService) { }

  ngOnInit(): void {
  }

  productData = new FormGroup({
    product_name: new FormControl(""),
    price: new FormControl(""),
    brand: new FormControl(""),
    description: new FormControl(""),
    rating: new FormControl(""),
    Category: new FormControl("")
  })

  onSubmitFun(){
    console.log(this.productData.value);
    this.productServ.postProductDetails(this.productData.value).subscribe((res:any)=>{
      if(res.status == true){
        alert("Product added Successfully!")
      }
      else{
        alert(res.data)
      }
    })
  }
}
