/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-dragexample4;
 * @description This component for drag and drop example4
**/

import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray
} from '@angular/cdk/drag-drop';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { resources } from "../../../../resource/resource";

@Component({
  selector: 'ptg-ui-dragexample4',
  templateUrl: './dragexample4.component.html',
  styleUrls: ['./dragexample4.component.scss']
})
export class Dragexample4Component {

  collectionForm!: FormGroup;
  currentCollection?: any;
  inputCount = ['test'];
  codeKey = 'key';
  resources=resources;

  @ViewChildren('code') codes!: QueryList<any>;

  get collectionArray(): any {
    return (
      this.collectionForm &&
      (this.collectionForm.get('collection') as FormArray)
    );
  }

  constructor(private fb: FormBuilder) {
    this.collectionForm = this.fb.group({
      collection: this.fb.array([]),
    });
   }

   /**
   * @functionality Example 3 - Manual add list   ;
   * @description This method returns form group for collection
   **/

  // Method for add CollectionGroup
  addCollectionGroup(collection: any): FormGroup {
    const group = this.fb.group({
      [this.codeKey]: [collection[this.codeKey]],
      // [this.descKey]: [collection[this.descKey]],
    });
    return group;
  }

  // Method for delete list
  deleteCollection(i: any): void {
    this.collectionArray.controls.splice(i, 1);
  }

  // Method for reset list field
  resetCollection(i: any): void {
    this.collectionArray.controls[i]?.reset();
  }

  // Method for add list item
  addManual(): void {
    const collection: any = {
      [this.codeKey]: '',
    };
    this.collectionArray.push(this.addCollectionGroup(collection));

    // focus on last added row
    setTimeout(() => {
      this.codes.last.nativeElement.focus();
    });
  }

  // Drop method for example 3
  drop1(event: CdkDragDrop<string[]>): void {

    moveItemInArray(
      this.collectionArray.controls,
      event.previousIndex,
      event.currentIndex
    );
  }
}
