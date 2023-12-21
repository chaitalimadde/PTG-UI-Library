/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, OnInit, } from '@angular/core';
import { resources } from "../../../resource/resource";
import { mocksService } from '@ptg-angular-app/common/data-services/mocks.service';
import { TreeviewItem } from 'ngx-treeview';

@Component({
  selector: 'ptg-ui-checkbox-examples',
  templateUrl: './checkbox-examples.component.html',
  styleUrls: ['./checkbox-examples.component.scss']
})
export class CheckboxExamplesComponent implements OnInit {
  constructor(private mocksApiService: mocksService,) {}
  checkBoxData:any;
  resources=resources
  ngOnInit(): void {
    this.mocksApiService.getCheckboxList().subscribe((response) => {
    this.checkBoxData =new TreeviewItem(response?.data[0].attributes.data) ;
      });
    }
  

  onChanges(event:any){
    console.log(event, 'event');
  }
}
