import  'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class DataService{
  
     constructor(private http: Http) {}
          fetchDataWIS() {
              console.log("Data Loading");
              return this.http.get('app/resources/data/DetailsWIS.json').map(
              (res) => res.json()
              );
          }
          fetchDataRT() {
		console.log("New Loaded Data: ");
		return this.http.get('app/resources/data/DetailsRT.json').map(
			(res) => res.json()
		);
	}

} 