/* eslint-disable @angular-eslint/no-host-metadata-property */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-selectexample;
 * @description This component for selectexample
 **/

import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { resources } from '../../../resource/resource';
import { mocksService } from '@ptg-angular-app/common/data-services/mocks.service';
@Component({
  selector: 'ptg-ui-selectexample',
  templateUrl: './selectexample.component.html',
  styleUrls: ['./selectexample.component.scss'],
  host: {
    class: 'w-100',
  },
})
export class SelectexampleComponent implements OnInit , AfterViewInit {
  cityList: any = [];

  selectForm!: FormGroup;
  resources = resources;
  selectHtmlCode = `
  <ptg-ui-select
    class="class-name-here"
    [id]="'singleSelect'"
    [items]="cityList"
    [isMultiple]="false"
    [closeOnSelect]="true"
    [placeholder]="'SELECT CITY'">
  </ptg-ui-select>
  `;
  selectTsCode = `
    import { Component } from '@angular/core';

    @Component({
      selector: 'select-component',
      templateUrl: './select-component.html'
    })
    export class SelectComponent {
      // Array of Object of City List for Dropdown list
      cityList: [
        {
          id: '1',
          name: 'Indore',
        },
        {
          id: '2',
          name: 'Bhopal',
        },
        {
          id: '3',
          name: 'Neemuch',
        },
        {
          id: '4',
          name: 'Pune',
        },
        {
          id: '5',
          name: 'Bangalore',
        },
        {
          id: '6',
          name: 'Nagpur',
        },
        {
          id: '7',
          name: 'Delhi',
        },
        {
          id: '8',
          name: 'Hyderabad',
        },
        {
          id: '9',
          name: 'Ahmedabad',
        },
        {
          id: '10',
          name: 'Kanpur',
        },
        {
          id: '11',
          name: 'Agra',
        },
        {
          id: '12',
          name: 'Nashik',
        }
      ]
    }
  `;

  multiSelectHtmlCode = `
  // isMultiple prop should be true for multi select dropdown

  <ptg-ui-select
    formControlName="city1"
    class="w-100"
    [id]="'multiSelect'"
    [items]="cityList"
    [isMultiple]="true"
    [closeOnSelect]="false"
    [placeholder]="'SELECT CITY'">
  </ptg-ui-select>
  `;

  multiSelectCountHtmlCode = `
  // isMultiple prop should be true for multi select dropdown
  // For select item count, need to provde itemCount as prop

  <ptg-ui-select
    [itemCount]="2"
    formControlName="city1"
    class="w-100"
    [id]="'multiSelect'"
    [items]="cityList"
    [isMultiple]="true"
    [closeOnSelect]="false"
    [placeholder]="'SELECT CITY'">
  </ptg-ui-select>
  `;

  constructor(private formBuilder: FormBuilder, private cdr:ChangeDetectorRef, private mocksApiService: mocksService,) { }

  ngOnInit(): void {
    this.selectForm = this.formBuilder.group({
      city1: [null],
      city2: [null],
    });

  this.mocksApiService.getCityList().subscribe((response) => {
    this.cityList  = response?.data[0].attributes.data;
    });
  }

  onFormSubmit(event: any) {
    // console.log('this.calendarForm', this.selectForm);
  }
  ngAfterViewInit() {
    const x: any = document.getElementsByClassName('ng-input');
    for (let i = 0; i < x.length; i++) {
      this.setAttributes(x[i].children[0], {
        autocomplete: 'given-name',
        'aria-label': 'given-label',
      });
      Object.assign(x[i].children[0], {
        autocomplete: 'given-name',
        'aria-label': 'given-label',
      });
    }
    this.cdr.detectChanges()
  }

  setAttributes(elements: any, attributes: any) {
    Object.keys(attributes).forEach(function (name) {
      elements.setAttribute(name, attributes[name]);
    });
  }
}
