/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { resources } from '@ptg-ui/apps/ptg-angular-app/src/resource/resource';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { mocksService } from '@ptg-angular-app/common/data-services/mocks.service';

@Component({
  selector: 'ptg-ui-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss']
})
export class AgGridComponent implements OnInit {
  rowData:any=[]
  columnData: any;
  filterParms = {
    buttons: ['apply', 'reset'],
    closeOnApply: true
  }
  resources=resources
  frameworkComponents: any;

  agGridDatatableHtmlCode = `
  <ptg-ui-ptg-ag-grid-datatable
    [rowData]="rowData"
    [columnData]="columnData"
    [sortable]="true"
    [rowHeight]="48"
    [rowDrag]="true"
    [animateRow]="true"
    [filter]="true"
    [filterParms]="filterParms"
    (onFilterOpen)="onFilterOpend($event)"
    (onFilterChanged)="onFilterChanged($event)"
    (onFilterModified)="onFilterModified($event)"
    [pagination]="true"
    (onPaginationChanged)="paginate($event)"
    [paginationLimit]="10"
    [editable]="false"
    (onPaginationChanged)="paginate($event)"
    (onCellValueChanges)="onEditing($event)"
    (onNavigateToNext)="navigateToNext($event)"
    (onNavigateToPrevious)="navigateToPrevious($event)"
    (onNavigateToPage)="navigateToPage($event)"
    [customPaginationClass]="'custom-Pagination-Class'"
  >
  </ptg-ui-ptg-ag-grid-datatable>
  `;

  agGridDatatableTsCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'ag-grid-datatable-component',
    templateUrl: './ag-grid-datatable.component.html'
  })
  export class AgGridDatatableComponent {
    // Data required for the Ag Grid Datatable
    gridData: [{
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
      ...
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
    filterParms = {
      buttons: ['apply', 'reset'],
      closeOnApply: true
    }

    ngOnInit() {
      this.columnData = [
        {headerName: 'Age', field: 'age'},
        {headerName: 'Country', field: 'country'},
        {headerName: 'Year', field: 'year'},
        {headerName: 'Date', field: 'date'},
        {headerName: 'Sport', field: 'sport'},
        {headerName: 'Silver', field: 'silver'},
        {headerName: 'Total', field: 'total'},
        {
          headerName: '',
          cellRenderer: 'buttonRenderer',
          cellRendererParams: {
          onClick: this.onEditButtonClick.bind(this.rowData),
          label: 'Click Here'
        },
      ]
    }

    onFilterOpend(event) {
      // Add code for click of filter opening
    }

    onEditButtonClick(params:any){
      // console.log(params)
    }

    onFilterChanged(event:any){
      // console.log('onFilterChanged', event);
    }

    onFilterModified(event:any){
      // console.log('onFilterModified', event);
    }

    onEditing(event:any){
      // console.log(event);
    }

    // pagination functionlity start here
    paginate(event:any){
      // console.log('pagination changed', event);
    }

    navigateToNext(event:any){
      // console.log('navigateToNext', event);
    }

    navigateToPrevious(event:any){
      // console.log('navigateToPrevious', event);
    }

    navigateToPage(event:any){
      // console.log('navigateToPage', event);
    }
  }`;

  constructor(private mocksApiService: mocksService,) {
    this.frameworkComponents = {
      buttonRenderer: ActionButtonComponent,
    }
  }


  ngOnInit(): void {
    // Ag grid datatable
    this.columnData = [
      {headerName: 'Athlete', field: 'athlete', rowDrag: true, floatingFilter: true, filter:'agTextColumnFilter',checkboxSelection: true, headerCheckboxSelection: true, pinned: 'left'},
      {headerName: 'Age', field: 'age'},
      {headerName: 'Country', field: 'country'},
      {headerName: 'Year', field: 'year'},
      {headerName: 'Date', field: 'date'},
      {headerName: 'Sport', field: 'sport'},
      {headerName: 'Silver', field: 'silver'},
      {headerName: 'Total', field: 'total'},
      {
        headerName: '',
        cellRenderer: 'buttonRenderer',
        cellRendererParams: {
        onClick: this.onEditButtonClick.bind(this.rowData),
        label: 'Click Here'
        },
      },
    ];
   this.rowData = [];
    this.mocksApiService.getTableList().subscribe((response) => {
      this.rowData = response?.data[0].attributes.grid;
    });
  }
 

  onFilterOpend(event) {
    // Add code for click of filter opening
  }

  onEditButtonClick(params:any){
    // console.log(params)
  }

  onFilterChanged(event:any){
    // console.log('onFilterChanged', event);
  }

  onFilterModified(event:any){
    // console.log('onFilterModified', event);
  }

  onEditing(event:any){
    // console.log(event);
  }

  // pagination functionlity start here
  paginate(event:any){
    // console.log('pagination changed', event);
  }

  navigateToNext(event:any){
    // console.log('navigateToNext', event);
  }

  navigateToPrevious(event:any){
    // console.log('navigateToPrevious', event);
  }

  navigateToPage(event:any){
    // console.log('navigateToPage', event);
  }
}
