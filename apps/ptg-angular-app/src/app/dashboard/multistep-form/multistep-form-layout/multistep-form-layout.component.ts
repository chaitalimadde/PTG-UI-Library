import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { mocksService } from '@ptg-angular-app/common/data-services/mocks.service';

@Component({
  selector: 'ptg-ui-multistep-form-layout',
  templateUrl: './multistep-form-layout.component.html',
  styleUrls: ['./multistep-form-layout.component.scss'],
})
export class MultistepFormLayoutComponent implements OnInit {
  cardList: any = [];
  countryList: any = [];
  genderList: any = [];
  stateList: any = [];
  titleArray: any = [];
  expMonthList: any = [];
  myForm: Array<string> | any;

  firstFormGroup = this._formBuilder.group({
    userName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirm: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    title: [null, [Validators.required]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phoneNo: [
      '',
      [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')],
    ],
    zipCode: [
      '',
      [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')],
    ],
    state: [null, [Validators.required]],
    address: ['', [Validators.required]],
    country: [null, [Validators.required]],
  });
  thirdFormGroup = this._formBuilder.group({
    cardType: [null, [Validators.required]],
    cardNo: [
      '',
      [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')],
    ],
    cvv: ['', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]],
    name: ['', [Validators.required]],
    expMonth: [null, [Validators.required]],
    expyear: [
      '',
      [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')],
    ],
  });
  isLinear = true;
  constructor(
    public router: Router,
    private _formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef,
    private mocksApiService: mocksService
  ) {}

  ngOnInit(): void {
    //card list
    this.mocksApiService.getCardList().subscribe((response) => {
      this.cardList = response?.data[0].attributes.card;
    });
    //country list
    this.mocksApiService.getCountryList().subscribe((response) => {
      this.countryList = response?.data[0].attributes.country;
    });
    //gender list
    this.mocksApiService.getGenderList().subscribe((response) => {
      this.genderList = response?.data[0].attributes.gender;
    });
    //state list
    this.mocksApiService.getStateList().subscribe((response) => {
      this.stateList = response?.data[0].attributes.state;
    });
    //title list
    this.mocksApiService.getSalutationList().subscribe((response) => {
      this.titleArray = response?.data[0].attributes.salutation;
    });
    //exp months
    this.mocksApiService.getExpMonthList().subscribe((response) => {
      this.expMonthList = response?.data[0].attributes.data;
    });
  }
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
