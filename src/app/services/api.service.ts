import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /*CRUD methods */

  /*Create*/
  postProduct(data: any) {
    return this.http.post<any>("http://localhost:3000/productList/", data);
  }
  /*Read*/
  getProduct(){
    return this.http.get<any>("http://localhost:3000/productList/");
  }
  /*Update*/
  putProduct(data: any, id:number) {
    return this.http.put<any>("http://localhost:3000/productList/" + id, data);
  }
  /*Delete*/
  deleteProduct(id: number) {
    return this.http.delete<any>("http://localhost:3000/productList/" + id)
  }
}
