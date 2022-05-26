import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  
  private url: string = "http://localhost:8080"

  constructor(
    private http:HttpClient
  ) { }

  getAll(){
    return this.http.get(this.url+'/packages');
  }
  create(data: any){
    console.log("*****My Data*****",data);
    console.log("Post Send...");
    this.getCountryRate(data.data);
    console.log(this.getCountryRate(data));
    return this.http.post<any>(this.url+"/createpackage", data);  
  }
  getCountryRate(data: any){
    console.log(this.http.get(this.url+"/getQuote",data));
    return this.http.get(this.url+"/getQuote",data);
  }
}
