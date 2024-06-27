import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  serverLink:any="http://localhost:5500/product"

  getProduct(){
    return this.http.get(`${this.serverLink}/getProduct`)
  }

  postProductDetails(formData:any){
    return this.http.post(`${this.serverLink}/addProduct`, formData)
  }
}
