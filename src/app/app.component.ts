import { Component, OnInit } from '@angular/core';
import {PackageService} from './package/package.service';
import { HttpClient } from '@angular/common/http';
import { CountryService } from './countries/country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  packages: any[] = [];
  package={
    namePackage: '',
    weight: '',
    width:'',
    height: '',
    length: '',
    originCountry: '',
    destination_country: '',
    user_id: ''
  };
  
  countries: any[] = [];
  country = {
    id:'',
    country_name: '',
    rate:''
  }


  constructor(
    private packageService : PackageService,
    private countryService : CountryService

  ){}

  ngOnInit(): void {
    this.loadCountries();
  }

  loadPackage(){
    this.packageService.getAll()
    .subscribe((data: any) => this.packages = data)
  }

  createPackage(){
    console.log("Load Ratings");
    this.packageService.create(this.package)
    .subscribe(() =>{
      this.loadPackage();
      this.package = {
        namePackage : '',
        weight: '',
        width:'',
        height: '',
        length: '',
        originCountry: '',
        destination_country: '',
        user_id : ''
      };
    })
    //*****Call to Get Quote Service*****
    //country.rate
    //finalQuote= (weight*)
    //console.log("*****My Country Rate*****"+ JSON.stringify() );

  }
  getQuote(){
    console.log("******Rates from quote*****");
    this.packageService.getCountryRate(this.package)
    .subscribe(() =>{
      this.loadPackage();
      console.log("Rates from packages");
      this.package = {
        namePackage : '',
        weight: '',
        width:'',
        height: '',
        length: '',
        originCountry: '',
        destination_country: '',
        user_id : ''
      };
    }) 
  }

  loadCountries(){
    this.countryService.getAll()
    .subscribe((data: any) => this.countries = data);
  }

}
