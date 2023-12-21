import { Component, OnInit } from '@angular/core';
import { resources } from "../../../resource/resource";
import { mocksService } from '@ptg-angular-app/common/data-services/mocks.service';
@Component({
  selector: 'ptg-ui-download-example',
  templateUrl: './download-example.component.html',
  styleUrls: ['./download-example.component.scss']
})
export class DownloadExampleComponent implements OnInit{
  tableData:any={};
  constructor(private mocksApiService: mocksService,) { }

  resources=resources;
  ngOnInit(): void {
    this.tableData = {};
    this.mocksApiService.getTableData().subscribe((response) => {
    this.tableData={rowsData:response?.data[0].attributes.data.data,columnsData:response?.data[0].attributes.data.columns,}
    });
  }

  fileDownloadHtmlCode = `
  <ptg-ui-file-download [tableData]="tableData"></ptg-ui-file-download>
  `;
  fileDownloadTsCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'file-download-component',
    templateUrl: './file-download-component.html'
  })
  export class FileDownloadComponent {
    // Data required to download in the file format
    tableData: [{
        "id":1,
        "athlete": "Michael Phelps",
        "age": 23,
        "country": "United States",
        "year": 2008,
        "date": "24/08/2008",
        "sport": "Swimming",
        "gold": 8,
        "silver": 0,
        "total": 8
      },
      {
        "id":11,
        "athlete": "Michael Phelps",
        "age": 19,
        "country": "United States",
        "year": 2004,
        "date": "29/08/2004",
        "sport": "Swimming",
        "gold": 6,
        "silver": 2,
        "total": 8
      },
    ]
  }
  `;
}
