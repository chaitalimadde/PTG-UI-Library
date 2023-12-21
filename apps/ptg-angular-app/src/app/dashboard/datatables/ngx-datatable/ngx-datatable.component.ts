import { Component, OnInit } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { resources } from "../../../../resource/resource";
import { mocksService } from '@ptg-angular-app/common/data-services/mocks.service';

@Component({
  selector: 'ptg-ui-ngx-datatable',
  templateUrl: './ngx-datatable.component.html',
  styleUrls: ['./ngx-datatable.component.scss']
})
export class NgxDatatableComponent implements OnInit {
  constructor(private mocksApiService: mocksService,) {}
  ngxdata:any
  columns:any;
  offset: number = 0;
  rowClass: string = '';
  SelectionType = SelectionType;
  temp = [];
  resources=resources;

  ngOnInit(): void {
    this.temp = this.ngxdata;
    this.columns = [
      { name: "Athlete", field: "athlete", frozenLeft: true},
      { name: "Age",field: "age",filtering: true },
      { name: "Country" ,field: "country",filtering: false},
      { name: "Year",field: "year",filtering: false },
      { name: "Date",field: "date" ,filtering: false},
      { name: "Sport",field: "sport" ,filtering: false},
      { name: "Gold",field: "gold" ,filtering: false},
      { name: "Silver",field: "silver" ,filtering: false},
      { name: "Total",field: "total" ,filtering: false},
    ];
    this.mocksApiService.getTableList().subscribe((response) => {
      this.ngxdata = response?.data[0].attributes.grid;
       });
  }

  // Filter functions 
  updateFilter(event:any) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d:any) {
      return d.athlete.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.ngxdata = temp;
    // Whenever the filter changes, always go back to the first page
    this.offset = 0;
  }

  onSelect(event: any){
    // console.log(event);
  }

  getAction(event:any){
    // console.log(event);
  }
}
