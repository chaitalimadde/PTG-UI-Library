import { Component, OnInit } from '@angular/core';
import { resources } from "../../../../resource/resource";
import { mocksService } from '@ptg-angular-app/common/data-services/mocks.service';

@Component({
  selector: 'ptg-ui-material-datatable',
  templateUrl: './material-datatable.component.html',
  styleUrls: ['./material-datatable.component.scss']
})
export class MaterialDatatableComponent implements OnInit {
  constructor(private mocksApiService: mocksService,) {}
  matrialdata:any=[]
  dataColumns:any;
  resources=resources;

  materialDatatableHtmlCode = `
    <ptg-ui-mat-datatable
      [data]="tableData"
      [columns]="dataColumns"
      [showFiter]="true"
      [totalCount]="20"
      [limit]="10"
      (paginationData)="paginate($event)"
    >
    </ptg-ui-mat-datatable>
    `;

  materialDatatableTsCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'ngx-datatable-component',
    templateUrl: './ngx-datatable-component.html'
  })
  export class NgxDatatableComponent {
    // Data required for the Ngx Datatable
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
    ],

    ngOnInit(): void {
      this.dataColumns = ['athlete', 'age', 'country', 'year', 'date', 'sport', 'silver','total'];
    }

    // pagination functionlity start here
    paginate(event:any){
      // console.log('pagination changed', event);
    }
  }`;

  ngOnInit(): void {
    this.dataColumns = ['athlete', 'age', 'country', 'year', 'date', 'sport', 'silver','total'];
    this.mocksApiService.getTableList().subscribe((response) => {
      this.matrialdata = response?.data[0].attributes.grid;      
    });
  }

  // pagination functionlity start here
  paginate(event:any){
    // console.log('pagination changed', event);
  }

  getValue(){
    alert('Button clicked')
  }
}
