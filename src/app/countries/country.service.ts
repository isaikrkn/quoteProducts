import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  
  private url: string = "http://localhost:8080"

  constructor(
    private http:HttpClient
  ) { }

  getAll(){
    return this.http.get(this.url+'/countries');
  }
  create(data: any){ 
    return this.http.post<any>(this.url+"/createcountry", data); 
  }

}
