/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { GRID_DATA } from '@ptg-angular-app/mock/grid-data';
import { resources } from '@ptg-ui/apps/ptg-angular-app/src/resource/resource';
import { ActionButtonComponent } from '../action-button/action-button.component';

@Component({
  selector: 'ptg-ui-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss'],
})
export class AgGridComponent implements OnInit {
  columnData: any;
  rowData = GRID_DATA;
  filterParms = {
    buttons: ['apply', 'reset'],
    closeOnApply: true,
  };
  resources = resources;
  frameworkComponents: any;
  constructor() {
    this.frameworkComponents = {
      buttonRenderer: ActionButtonComponent,
    };
  }

  ngOnInit(): void {
    // Ag grid datatable
    this.columnData = [
      {
        headerName: 'Athlete',
        field: 'athlete',
        rowDrag: true,
        floatingFilter: true,
        filter: 'agTextColumnFilter',
        checkboxSelection: true,
        headerCheckboxSelection: true,
        pinned: 'left',
      },
      { headerName: 'Age', field: 'age' },
      { headerName: 'Country', field: 'country' },
      { headerName: 'Year', field: 'year' },
      { headerName: 'Date', field: 'date' },
      { headerName: 'Sport', field: 'sport' },
      { headerName: 'Silver', field: 'silver' },
      { headerName: 'Total', field: 'total' },
      {
        headerName: '',
        cellRenderer: 'buttonRenderer',
        cellRendererParams: {
          onClick: this.onEditButtonClick.bind(this.rowData),
          label: 'Click Here',
        },
      },
    ];
  }

  onEditButtonClick(params: any) {
    // console.log(params)
  }
  // Ag-grid functionlity
  onFilterOpend(event: any) {
    // console.log('onFilterOpend', event);
  }

  onFilterChanged(event: any) {
    // console.log('onFilterChanged', event);
  }

  onFilterModified(event: any) {
    // console.log('onFilterModified', event);
  }

  onEditing(event: any) {
    // console.log(event);
  }

  // pagination functionlity start here
  paginate(event: any) {
    // console.log('pagination changed', event);
  }

  navigateToNext(event: any) {
    // console.log('navigateToNext', event);
  }

  navigateToPrevious(event: any) {
    // console.log('navigateToPrevious', event);
  }

  navigateToPage(event: any) {
    // console.log('navigateToPage', event);
  }
}
