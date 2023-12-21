import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenRes } from '../models/token.model';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { resources } from '../../../resource/resource';
import { mocksService } from '@ptg-angular-app/common/data-services/mocks.service';

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-signup;
 * @description This component for signup
 **/

@Component({
	selector: 'ptg-ui-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit, AfterViewInit {
	signupForm!: FormGroup;
	loading = false;
	genderList:any=[];
	cityList:any=[];
	resources = resources;

	get f() {
		return this.signupForm.controls;
	}

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private auth: AuthService,
		private cdr: ChangeDetectorRef,
		private mocksApiService: mocksService


	) { }

	ngOnInit(): void {
		this.signupForm = this.formBuilder.group({
			username: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.email]],
			gender: [null, Validators.required],
			city: [null, Validators.required],
			dob: ['', Validators.required],
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
			username: this.signupForm.value.username,
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
		this.loading = true;
		this.auth.signUp(payload).subscribe(
			(res: TokenRes) => {
				// For response success
				this.auth.setToken(JSON.stringify(res));
				this.loading = false;
				this.router.navigate(['/']);
			},
			(err) => {
				// For response error
				// this.errorMessage = err.error.error;
				this.loading = false;
			}
		);
	}
	 // this code is used for only web-accessibility (for custom ng select issue)
	 ngAfterViewInit() {
		const x: any = document.getElementsByClassName('ng-input');
		console.log(x);
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
		console.log(elements, attributes);
		
		Object.keys(attributes).forEach(function (name) {
		  elements.setAttribute(name, attributes[name]);
		});
	  }
}
