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

  barChartHtmlCode = `
  <ptg-ui-bar-chart [data]="data" [width]="width" [height]="height" [margin]="margin"
                    [start]="start" [end]="end">
  </ptg-ui-bar-chart>`;

  barChartTsCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'd3-chart-component',
    templateUrl: './d3-chart.component.html'
  })
  export class D3ChartComponent {
    // Data required for the Chart
    height:330,
    width:550,
    margin:50,
    start: 0,
    end: 160000,
    data: [
      { Framework: 'Vue', Stars: '100000', Released: '2014', color: '#454545' },
      { Framework: 'React', Stars: '120793', Released: '2013', color: 'blue' },
      { Framework: 'Angular', Stars: '92342', Released: '2016', color: 'green' },
      {
        Framework: 'Backbone',
        Stars: '67647',
        Released: '2010',
        color: 'orange',
      },
      { Framework: 'Ember', Stars: '121471', Released: '2011', color: 'pink' },
    ],
  }`;

  pieChartHtml = `
    <ptg-ui-pie-chart [data]="data" [colorsArray]="colors"></ptg-ui-pie-chart>
  `;
  pieChartTsCode = `
    import { Component } from '@angular/core';

    @Component({
      selector: 'pie-chart-component',
      templateUrl: './pie-chart.component.html'
    })
    export class PieChartComponent {
      // Data required for the Pie Chart
      colors:['#8D8741', '#659DBD', '#DAAD86', '#BC986A', '#FBEEC1', '#242582'],
      data: [
        { Framework: 'Vuee', Stars: '100000', Released: '2014', color: '#454545' },
        { Framework: 'React', Stars: '120793', Released: '2013', color: 'blue' },
        { Framework: 'Angular', Stars: '92342', Released: '2016', color: 'green' },
        {
          Framework: 'Backbone',
          Stars: '67647',
          Released: '2010',
          color: 'orange',
        },
        { Framework: 'Ember', Stars: '121471', Released: '2011', color: 'pink' },
      ]
    }`;

  lineChartHtml = `
    <ptg-ui-line-chart [data]="data" [margin]="margin" [width]="width" [height]="height">
    </ptg-ui-line-chart>
  `;
  lineChartTsCode = `
    import { Component } from '@angular/core';

    @Component({
      selector: 'line-chart-component',
      templateUrl: './line-chart.component.html'
    })
    export class LineChartComponent {
      // Data required for the Line Chart
      height:330,
      margin:50,
      width:550,
      colors:['#8D8741', '#659DBD', '#DAAD86', '#BC986A', '#FBEEC1', '#242582'],
      data: [
        { Framework: 'Vuee', Stars: '100000', Released: '2014', color: '#454545' },
        { Framework: 'React', Stars: '120793', Released: '2013', color: 'blue' },
        { Framework: 'Angular', Stars: '92342', Released: '2016', color: 'green' },
        {
          Framework: 'Backbone',
          Stars: '67647',
          Released: '2010',
          color: 'orange',
        },
        { Framework: 'Ember', Stars: '121471', Released: '2011', color: 'pink' },
      ]
    }`;
}
