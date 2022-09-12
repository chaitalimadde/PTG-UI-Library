/* eslint-disable no-restricted-syntax */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-dragexample2;
 * @description This component for drag and drop example2
**/

import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@ptg-angular-app/auth/services/auth.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Subject, takeUntil } from 'rxjs';
import { resources } from "../../../../resource/resource";
import { USERSDATA } from "../../../mock/mocks";

@Component({
  selector: 'ptg-ui-dragexample2',
  templateUrl: './dragexample2.component.html',
  styleUrls: ['./dragexample2.component.scss'],
})
export class Dragexample2Component implements OnInit, OnDestroy {
  public personaldetails: any = [];
  loading = false;
  unsubscribe: Subject<any> = new Subject();
  resources=resources;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loading = true;
    // this.getUsers()
    this.getuserMock()
    this.loading = false;
  }
  getuserMock(){
    this.personaldetails = USERSDATA.filter((res: any) => {
      if (res.role.type === 'admin') {
        return res;
      }
    });
  }
  // getUsers(){
  //   this.authService
  //   .getUser()
  //   .pipe(takeUntil(this.unsubscribe))
  //   .subscribe({
  //     next: (data:any) => {
  //       // console.log('data', data);
  //       this.personaldetails = data.filter((res: any) => {
  //         if (res?.role?.type === 'admin') {
  //           return res;
  //         }
  //       });
  //       // this.personaldetails = data;
  //       // console.log('this.personaldetails-----', this.personaldetails);
  //       this.loading = false;
  //     },
  //     error: (err) => {
  //       this.loading = false;
  //     },
  //     complete: () => console.info('complete') 
  //   });
  // }

  // Drop method for example 1
  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  
  ngOnDestroy(): void {
    this.unsubscribe.next(0);
    this.unsubscribe.complete();
  }
}
