import { Component } from '@angular/core';

@Component({
  selector: 'ptg-ui-dialog-component',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent {
  htmlCode = `
  <ptg-modal :btn-name="buttonName" :modal-header-name="modalHeaderName" confirm-button-name="Okay"
  (modalClose)="modalClosed()" (confirmClose)="onConfirmation()">
    <div slot="body-block">
      <h2>Angular Slot for Body</h2>
    </div>
  </ptg-modal>
  `;

  htmlCodeToHideFooter = `
  <ptg-modal btn-name="Hide Footer in Modal" :show-footer="false" :modal-header-name="modalHeaderName" confirm-button-name="Okay"
  (modalClose)="modalClosed()" (confirmClose)="onConfirmation()">
    <div slot="body-block"> // Slot Name should be 'body-block'
      <h2>In Angular</h2>
    </div>
  </ptg-modal>
  `;

  tsCode =
    `
    // All of the above props are optional and default values are provided
    // You can hide header/footer by using the props options
    // showHeader = false, It will remove the Header from dialog

    import { Component } from '@angular/core';

    @Component({
      selector: 'demo-dialog-component',
      templateUrl: './demo-dialog.component.html'
    })
    export class DemoDialogComponent {
      buttonName = 'Open Modal',
      modalHeaderName = 'Modal Header',

      // This method will be called when we close or cancel the dialog
      modalClosed() {
        console.log('Modal Closed');
      }

      // This method will be called when we click on confirm button of dialog
      onConfirmation() {
        console.log('Confirm Button Clicked');
      }
    }`

    modalClosed() {
      console.log('Modal Closed');
    }
}
