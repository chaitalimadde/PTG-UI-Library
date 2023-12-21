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
}
