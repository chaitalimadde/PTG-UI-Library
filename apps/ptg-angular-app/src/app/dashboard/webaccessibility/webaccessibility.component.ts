/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * @since April 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-webaccessibility;
 * @description This component for web accessibility example
 * @UpdatedBy Aakshay Patidar
 **/

import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '@ptg-angular-app/auth/models/user.model';
import { resources } from '../../../resource/resource';
import { mocksService } from '@ptg-angular-app/common/data-services/mocks.service';
@Component({
  selector: 'ptg-ui-webaccessibility',
  templateUrl: './webaccessibility.component.html',
  styleUrls: ['./webaccessibility.component.scss'],
})
export class WebaccessibilityComponent implements OnInit {
  signupForm!: FormGroup;
  loading = false;
  genderList:any=[];
  cityList:any=[];
  
  resources = resources;
  serviceData:any

  get f() {
    return this.signupForm.controls;
  }

  constructor(
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef,
    private mocksApiService: mocksService

  ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      gender: [null, Validators.required],
      city: [null, Validators.required],
      dob: ['', [Validators.required]],
      password: [null, [Validators.required]],
      confirm: [false, [Validators.requiredTrue]],
    });

  // gender list
  this.mocksApiService.getGenderList().subscribe((response) => {
    this.genderList = response?.data[0].attributes.gender
   });
   //city list
   this.mocksApiService.getCityList().subscribe((response) => {
    this.cityList = response?.data[0].attributes.data;
    });
    
  }

  // This method for signup submit
  onSignupSubmit() {
    const payload = {
      username: this.signupForm.value.userName,
      email: this.signupForm.value.email,
      gender: this.signupForm.value.gender,
      city: this.signupForm.value.city,
      dob: this.signupForm.value.dob,
      password: this.signupForm.value.password,
    };    
    this.userSignup(payload);
  }

  // This method for signUp api call
  userSignup(payload: User) {
    // this.loading = true;
    alert('userSignedUp');
  }

  // this code is used for only web-accessibility (for custom ng select issue)
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
