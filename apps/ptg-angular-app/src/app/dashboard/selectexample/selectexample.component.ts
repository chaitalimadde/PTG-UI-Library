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

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
export class SelectexampleComponent implements OnInit {
  cityList: any = [];

  selectForm!: FormGroup;
  resources = resources;

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
