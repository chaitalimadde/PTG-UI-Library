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
