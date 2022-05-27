import { Component, OnInit } from '@angular/core';
import {PackageService} from './package/package.service';
import { HttpClient } from '@angular/common/http';
import { CountryService } from './countries/country.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  packages: any[] = [];

  lastPackage$: any;

  lasPackage={
    namePackage:'',
    finalQuote: ''
  }

  package={
    namePackage: '',
    weight: '',
    width:'',
    height: '',
    length: '',
    originCountry: '',
    destination_country: '',
    user_id: '0',
    finalQuote: ''
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
    
    /*setTimeout( ()=>{
      this.packageService.getAll()
      .subscribe(data =>{
        this.lastPackage$ = data;
        this.lasPackage=this.lastPackage$[this.lastPackage$.length-1];

         console.log("LastPackage****************************",this.lastPackage$[this.lastPackage$.length-1]);
      });
    }, 1000);*/

  }


  getQuote(){
    console.log("******Rates from quote*****");
    this.packageService.getFinalQuote(this.package)
    .subscribe(data =>{

      this.lastPackage$ = data;
      console.log("The last******"+this.lastPackage$);
      this.package = {
        namePackage : '',
        weight: '',
        width:'',
        height: '',
        length: '',
        originCountry: '',
        destination_country: '',
        user_id : '1',
        finalQuote: ''
      };

    }) 
  }

  loadCountries(){
    this.countryService.getAll()
    .subscribe((data: any) => this.countries = data);
  }

}
