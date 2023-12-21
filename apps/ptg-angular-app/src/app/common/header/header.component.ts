/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-header;
 * @description This component for header
**/

import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { mocksService } from '../data-services/mocks.service';

@Component({
  selector: 'ptg-ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  itemValue = 'English';
  langeList:any=[];
  constructor(public translate: TranslateService,  private cdr: ChangeDetectorRef ,private mocksApiService: mocksService,){
  }
  ngOnInit(): void {
    this.mocksApiService.getLangList().subscribe((response) => {
      this.langeList = response?.data[0].attributes.language;
      });  }
 
  changeLang(lang:any){
		this.translate.use(lang.value)
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