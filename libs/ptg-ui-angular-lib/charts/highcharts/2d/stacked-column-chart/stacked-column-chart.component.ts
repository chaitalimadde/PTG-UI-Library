import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'ptg-ui-stacked-column-chart',
  templateUrl: './stacked-column-chart.component.html',
  styleUrls: ['./stacked-column-chart.component.scss']
})
export class StackedColumnChartComponent implements OnInit {
  @Input() remainingOptions:any;
  @Input() title?:any;
  @Input() subtitle?:any;
  @Input() categories?:any;
  @Input() yTitle?:any;
  
  ngOnInit(): void {
  // Call function to create chart 
  this.createChartColumn();
  }

  // Function for create chart 
  createChartColumn(): void {
    const chart = Highcharts.chart('stacked-chart' as any, {
      chart: {
        type: 'column'
    },
      title:this.title,
      xAxis: {
        categories:this.categories 
    },
    yAxis: {
      min: 0,
      title: {
          text: this.yTitle
      },
      stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
              color: 'gray'
          }
      }
  },
      plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    ...this.remainingOptions
    } as any);
  }
}
