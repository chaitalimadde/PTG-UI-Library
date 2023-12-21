import { Component, OnInit } from '@angular/core';

import { resources } from '../../../../resource/resource';
import { chartService } from '@ptg-angular-app/common/data-services/chart.service';
@Component({
  selector: 'ptg-ui-d3-charts',
  templateUrl: './d3-charts.component.html',
  styleUrls: ['./d3-charts.component.scss'],
})
export class D3ChartsComponent implements OnInit {
  constructor(private chartApiService: chartService) {}
  title = 'angular-d3';

  resources = resources;
  barChartData: any = {
    data: [],
  };
  pieChartData: any = {
    data: [],
  };
  lineChartData: any = {
    data: [],
  };

  ngOnInit(): void {
    this.chartApiService.getD3BarList().subscribe((response) => {
      let data1 = response?.data[0].attributes.data;
      if (data1.length) {
        this.barChartData = {
          margin: 50,
          start: 0,
          end: 160000,
          height: response?.data[0].attributes.height,
          width: response?.data[0].attributes.width,
          title: response?.data[0].attributes.title,
          source: response?.data[0].attributes.source,
          x_title: response?.data[0].attributes.x_title,
          y_title: response?.data[0].attributes.y_title,
          data: data1,
        };
      }
    });

    //pie chart
    this.chartApiService.getD3PieList().subscribe((response) => {
      let piechartdata = response?.data[0].attributes.piedata;
      let color = response?.data[0].attributes.colors.split(',');
      if (piechartdata.length) {
        this.pieChartData = {
          height: response?.data[0].attributes.height,
          width: response?.data[0].attributes.width,
          title: response?.data[0].attributes.title,
          source: response?.data[0].attributes.source,
          x_title: response?.data[0].attributes.x_title,
          y_title: response?.data[0].attributes.y_title,
          colors: color,
          data: piechartdata,
        };
      }
    });

    //line chart
    this.chartApiService.getD3LineChart().subscribe((response) => {
      let data1 = response?.data[0].attributes.data.map((e) => ({
        date: new Date(e.date),
        value: e.value,
      }));
      if (data1.length) {
        this.lineChartData = {
          data: data1,
          margin: { top: 20, right: 20, bottom: 50, left: 70 },
          width: 860,
          height: 400,
        };
      }
    });
  }
}
