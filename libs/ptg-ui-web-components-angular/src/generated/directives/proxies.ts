/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@ptg-ui/ptg-ui-web-components';




export declare interface MyComponent extends Components.MyComponent {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['first', 'last', 'middle']
})
@Component({
  selector: 'my-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['first', 'last', 'middle']
})
export class MyComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgAccordion extends Components.PtgAccordion {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'description', 'label', 'width']
})
@Component({
  selector: 'ptg-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'description', 'label', 'width']
})
export class PtgAccordion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgAlert extends Components.PtgAlert {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['appreanced', 'buttoncss', 'texed']
})
@Component({
  selector: 'ptg-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appreanced', 'buttoncss', 'texed']
})
export class PtgAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgButton extends Components.PtgButton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['appearance', 'text']
})
@Component({
  selector: 'ptg-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appearance', 'text']
})
export class PtgButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgCalender extends Components.PtgCalender {
  /**
   *  
   */
  dayChanged: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  monthChanged: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['callback', 'dayNames', 'monthNames', 'showFillDays', 'startDate']
})
@Component({
  selector: 'ptg-calender',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['callback', 'dayNames', 'monthNames', 'showFillDays', 'startDate']
})
export class PtgCalender {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dayChanged', 'monthChanged']);
  }
}


export declare interface PtgCheckbox extends Components.PtgCheckbox {
  /**
   *  
   */
  valueChanged: EventEmitter<CustomEvent<string>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['callback', 'checked', 'color', 'dataid', 'datavalue', 'disabled', 'indeterminate', 'label']
})
@Component({
  selector: 'ptg-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['callback', 'checked', 'color', 'dataid', 'datavalue', 'disabled', 'indeterminate', 'label']
})
export class PtgCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChanged']);
  }
}


export declare interface PtgFooter extends Components.PtgFooter {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['footer']
})
@Component({
  selector: 'ptg-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['footer']
})
export class PtgFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgHeader extends Components.PtgHeader {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['header']
})
@Component({
  selector: 'ptg-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['header']
})
export class PtgHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgInput extends Components.PtgInput {
  /**
   * Event emmiter to handle changes 
   */
  valueChanged: EventEmitter<CustomEvent<string>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['inputId', 'label', 'name', 'placeholder', 'type', 'value', 'width']
})
@Component({
  selector: 'ptg-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inputId', 'label', 'name', 'placeholder', 'type', 'value', 'width']
})
export class PtgInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChanged']);
  }
}


export declare interface PtgModal extends Components.PtgModal {
  /**
   *  
   */
  modalClose: EventEmitter<CustomEvent<boolean>>;
  /**
   *  
   */
  confirmClose: EventEmitter<CustomEvent<boolean>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['btnName', 'confirmButtonName', 'isOpen', 'modalHeaderName', 'modalSize', 'showFooter', 'showHeader']
})
@Component({
  selector: 'ptg-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['btnName', 'confirmButtonName', 'isOpen', 'modalHeaderName', 'modalSize', 'showFooter', 'showHeader']
})
export class PtgModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['modalClose', 'confirmClose']);
  }
}


export declare interface PtgPagination extends Components.PtgPagination {
  /**
   *  
   */
  pageChanged: EventEmitter<CustomEvent<any>>;
  /**
   *  
   */
  sizeChanged: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['itemCount', 'page', 'pageSize', 'pageSizeOptions']
})
@Component({
  selector: 'ptg-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['itemCount', 'page', 'pageSize', 'pageSizeOptions']
})
export class PtgPagination {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['pageChanged', 'sizeChanged']);
  }
}


export declare interface PtgRadiobtn extends Components.PtgRadiobtn {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['ids', 'name', 'sender', 'type', 'value']
})
@Component({
  selector: 'ptg-radiobtn',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['ids', 'name', 'sender', 'type', 'value']
})
export class PtgRadiobtn {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgRadiobuton extends Components.PtgRadiobuton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['id', 'name', 'sender', 'type', 'value']
})
@Component({
  selector: 'ptg-radiobuton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['id', 'name', 'sender', 'type', 'value']
})
export class PtgRadiobuton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgSelect extends Components.PtgSelect {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['multiSelect', 'selectData']
})
@Component({
  selector: 'ptg-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['multiSelect', 'selectData']
})
export class PtgSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgSidenav extends Components.PtgSidenav {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['text', 'url']
})
@Component({
  selector: 'ptg-sidenav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['text', 'url']
})
export class PtgSidenav {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgSpinner extends Components.PtgSpinner {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['appearance']
})
@Component({
  selector: 'ptg-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appearance']
})
export class PtgSpinner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgTable extends Components.PtgTable {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['customClass', 'pageSizeOptions', 'searchable', 'sortable', 'tableHover', 'tableStrip', 'tablecolumn', 'tabledata', 'tabletitle', 'themeColor']
})
@Component({
  selector: 'ptg-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['customClass', 'pageSizeOptions', 'searchable', 'sortable', 'tableHover', 'tableStrip', 'tablecolumn', 'tabledata', 'tabletitle', 'themeColor']
})
export class PtgTable {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgTextarea extends Components.PtgTextarea {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['appearance', 'autofocus', 'cols', 'disable', 'form', 'maxlen', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'value']
})
@Component({
  selector: 'ptg-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appearance', 'autofocus', 'cols', 'disable', 'form', 'maxlen', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'value']
})
export class PtgTextarea {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgToast extends Components.PtgToast {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['appearance', 'discription', 'id1', 'open', 'type']
})
@Component({
  selector: 'ptg-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appearance', 'discription', 'id1', 'open', 'type']
})
export class PtgToast {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PtgTooltip extends Components.PtgTooltip {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['backgroundColor', 'text', 'tooltipAlignment', 'tooltipText']
})
@Component({
  selector: 'ptg-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['backgroundColor', 'text', 'tooltipAlignment', 'tooltipText']
})
export class PtgTooltip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
