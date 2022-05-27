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
    //console.log(this.http.get(this.url+'/getAllPackages'));
    return this.http.get(this.url+'/getAllPackages');
  }

  getFinalQuote(data: any){
    console.log("*****My Data***** Final Quote",data);
    return this.http.post<any>(this.url+"/createpackage/",data);
  }
}
