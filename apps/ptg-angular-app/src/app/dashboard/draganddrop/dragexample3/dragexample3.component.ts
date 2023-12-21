/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-dragexample3;
 * @description This component for drag and drop example3
**/

import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { resources } from "../../../../resource/resource";
import { mocksService } from '@ptg-angular-app/common/data-services/mocks.service';

@Component({
  selector: 'ptg-ui-dragexample3',
  templateUrl: './dragexample3.component.html',
  styleUrls: ['./dragexample3.component.scss']
})
export class Dragexample3Component implements OnInit {
  todo:any=[];
  done:any;

  resources=resources;
  
  constructor(private mocksApiService: mocksService,) { }

  ngOnInit(): void {
    //todo list
    this.mocksApiService.getTodoList().subscribe((response) => {
      this.todo = response?.data[0].attributes.todo.split(',')
     });
     //done list
     this.mocksApiService.getDoneList().subscribe((response) => {
      this.done=response?.data[0].attributes.done.split(',')
     });

  }

  // Drop method for example 2
  drop(event: CdkDragDrop<string[]> | any) {

    console.log('drop', event);
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

}
