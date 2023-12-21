/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { resources } from '../../../../resource/resource';
import { chartService } from '@ptg-angular-app/common/data-services/chart.service';

@Component({
  selector: 'ptg-ui-high-charts',
  templateUrl: './high-charts.component.html',
  styleUrls: ['./high-charts.component.scss'],
})
export class HighChartsComponent implements OnInit {
  constructor(private chartApiService: chartService) {}
  lineChart3d: any = {
    data: [],
  };
  barChart3d: any = {
    data: [],
  };
  multiLineChart3d: any = {
    data: [],
  };
  pieChart3d: any = {
    data: [],
  };
  lineBarChart: any = { categories: [] };
  stackedColumn: any = { categories: [] };

  resources = resources;

  ngOnInit(): void {
    // linechart2D
    this.chartApiService.getLineChart2D().subscribe((response) => {
      let data1 = response?.data[0].attributes.data;
      let categorie = response?.data[0]?.attributes?.categories.split(',');
      if (data1.length) {
        this.lineChart3d = {
          data: data1,
          categories: categorie,
        };
      }
    });
    //barchart3D
    this.chartApiService.getBarChart3D().subscribe((response) => {
      let data1 = response?.data[0].attributes.data;
      let categorie = response?.data[0]?.attributes?.categories.split(',');
      if (data1.length) {
        this.barChart3d = {
          data: data1,
          categories: categorie,
        };
      }
    });
    //multilinechart2d
    this.chartApiService.getMultiLineChart2D().subscribe((response) => {
      let data1 = response?.data[0].attributes.data;
      let categorie = response?.data[0]?.attributes?.categories.split(',');
      if (data1.length) {
        this.multiLineChart3d = {
          data: data1,
          categories: categorie,
        };
      }
    });

    //lineBarChart
    this.chartApiService.getLineBarChart().subscribe((response) => {
      let series = response?.data[0].attributes.series;
      let categorie = response?.data[0]?.attributes?.categories.split(',');
      this.lineBarChart = {
        title: response?.data[0].attributes.title,
        subtitle: response?.data[0].attributes.subtitle,
        categories: categorie,
        remainingOptions: {
          series: series,
        },
      };
    });

    //stackedColumn
    this.chartApiService.getStackedColumnData().subscribe((response) => {
      let series = response?.data[0].attributes.series;
      let categorie = response?.data[0]?.attributes?.categories.split(',');
      this.stackedColumn = {
        title: response?.data[0].attributes.title,
        categories: categorie,
        remainingOptions: {
          series: series,
        },
      };
    });

    //pieChart3d
    this.chartApiService.getPieChart3D().subscribe((response) => {
      let data1 = response?.data[0].attributes.data.data;
      if (data1.length) {
        this.pieChart3d = {
          data: data1,
        };
      }
    });
  }
}
