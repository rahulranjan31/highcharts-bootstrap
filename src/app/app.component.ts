import { Component } from '@angular/core';
import { DataService } from './services/app.service';

const Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 

export class AppComponent {
 
  WISChart: Object;
  RTChart: Object;

 constructor(private dataServc: DataService) {

       this.dataServc.fetchDataWIS().subscribe((data) =>
               this.WISChart = {
                 chart: {
                     type: 'area',
                     height: 300,
                    zoomType: 'x'

                        },
                   colors: ['#339966', '#33ccff', '#808080'],
                  title: {
                    
                     text: 'Work Item Completion'
                  },
                  series: data

               } 
               
       );

       this.dataServc.fetchDataRT().subscribe((data) =>
               this.RTChart = {
                 chart: {
                     type: 'line',
                     height: 300,
                    zoomType: 'x'

                        },
                   colors: ['#339966', '#33ccff', '#808080'],
                  title: {
                    
                     text: 'Release Trend'
                  },
                  series: data

               } 
               
       );
 }
  
}
