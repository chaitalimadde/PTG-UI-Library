/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-dragexample1;
 * @description This component for drag and drop example1
**/

import { Component, Inject, OnInit, ViewEncapsulation } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { debounce } from "@agentepsilon/decko";
import { resources } from "../../../../resource/resource";
import { mocksService } from "@ptg-angular-app/common/data-services/mocks.service";
export interface TreeNode {
    id: string;
    children: TreeNode[];
    isExpanded?:boolean;
  }
@Component({
  selector: 'ptg-ui-dragexample1',
  templateUrl: './dragexample1.component.html',
  styleUrls: ['./dragexample1.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class Dragexample1Component implements OnInit {
    nodes:any;
//   nodes:TreeNode[];
// ids for connected drop lists 
  dropTargetIds:any = [];
  nodeLookup:any = {};
  // dropActionTodo: DropInfo = null;
  dropActionTodo!: any;
  resources=resources;

  constructor(@Inject(DOCUMENT) private document: Document,private mocksApiService: mocksService) {
  }
ngOnInit(): void {
    this.mocksApiService.getDemoData().subscribe((response) => {
        this.nodes=(response?.data[0].attributes.data);
        this.prepareDragDrop(this.nodes);

        });

    }
  prepareDragDrop(nodes: TreeNode[]) {
        nodes.forEach((node) => {
            this.dropTargetIds.push(node.id);
            this.nodeLookup[node.id] = node;
            this.prepareDragDrop(node.children);
        });
    }
  

  @debounce(50)
  dragMoved(event:any) {
      const e = this.document.elementFromPoint(event.pointerPosition.x,event.pointerPosition.y);
      
      if (!e) {
          this.clearDragInfo();
          return;
      }
      const container = e.classList.contains("node-item") ? e : e.closest(".node-item");
      if (!container) {
          this.clearDragInfo();
          return;
      }
     this.dropActionTodo = {
        
          targetId: container.getAttribute("data-id")
      };
      const targetRect = container.getBoundingClientRect();
      const oneThird = targetRect.height / 3;

      if (event.pointerPosition.y - targetRect.top < oneThird) {
          // before
          this.dropActionTodo["action"] = "before";
      } else if (event.pointerPosition.y - targetRect.top > 2 * oneThird) {
          // after
          this.dropActionTodo["action"] = "after";
      } else {
          // inside
          this.dropActionTodo["action"] = "inside";
      }
      this.showDragInfo();
  }


  drop(event:any) {
      if (!this.dropActionTodo) return;

      const draggedItemId = event.item.data;
      const parentItemId = event.previousContainer.id;
      const targetListId = this.getParentNodeId(this.dropActionTodo.targetId, this.nodes, 'main');

    //   console.log(
    //       '\nmoving\n[' + draggedItemId + '] from list [' + parentItemId + ']',
    //       '\n[' + this.dropActionTodo.action + ']\n[' + this.dropActionTodo.targetId + '] from list [' + targetListId + ']');

      const draggedItem = this.nodeLookup[draggedItemId];

      const oldItemContainer = parentItemId != 'main' ? this.nodeLookup[parentItemId].children : this.nodes;
      const newContainer = targetListId != 'main' ? this.nodeLookup[targetListId].children : this.nodes;

      const i = oldItemContainer.findIndex((c:any) => c.id === draggedItemId);
      oldItemContainer.splice(i, 1);

      switch (this.dropActionTodo.action) {
          case 'before':
          case 'after':
              const targetIndex = newContainer.findIndex((c:any) => c.id === this.dropActionTodo.targetId);
              if (this.dropActionTodo.action == 'before') {
                  newContainer.splice(targetIndex, 0, draggedItem);
              } else {
                  newContainer.splice(targetIndex + 1, 0, draggedItem);
              }
              break;

          case 'inside':
              this.nodeLookup[this.dropActionTodo.targetId].children.push(draggedItem)
              this.nodeLookup[this.dropActionTodo.targetId].isExpanded = true;
              break;
      }

      this.clearDragInfo(true)
  }

  getParentNodeId(id: string, nodesToSearch: TreeNode[], parentId: string): any {
      for (const node of nodesToSearch) {
          if (node.id == id) return parentId;
          const ret = this.getParentNodeId(id, node.children, node.id);
          if (ret) return ret;
      }
      return null;
  }

  showDragInfo() {
      this.clearDragInfo();
      if (this.dropActionTodo) {
        this.document.getElementById("node-" + this.dropActionTodo.targetId)
        ?.classList.add("drop-" + this.dropActionTodo.action);
      }
  }

  clearDragInfo(dropped = false) {
      
      if (dropped) {
          this.dropActionTodo = null;
      }
      this.document
          .querySelectorAll(".drop-before")
          .forEach(element => element.classList.remove("drop-before"));
      this.document
          .querySelectorAll(".drop-after")
          .forEach(element => element.classList.remove("drop-after"));
      this.document
          .querySelectorAll(".drop-inside")
          .forEach(element => element.classList.remove("drop-inside"));
  }
 

}
