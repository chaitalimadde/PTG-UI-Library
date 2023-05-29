/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-calendar;
 * @description This component for calendar
 **/

import {
  Component,
  OnInit,
  ViewChild,
  forwardRef,
  Input,
  HostListener,
  Output,
  EventEmitter,
  ElementRef,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ChangeDetectorRef
} from '@angular/core';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';


@Component({
  selector: 'ptg-ui-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: '',
    '(blur)': 'handleBlur()',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CalendarComponent),
    },
  ],
})
export class CalendarComponent implements OnInit, ControlValueAccessor {
  @ViewChild(BsDatepickerDirective, { static: false })
  datepicker?: BsDatepickerDirective;
  @ViewChild('datePicker', { static: true }) datePicker!: ElementRef;

  // @Input() parentForm!: FormGroup;
  // @Input() fieldname!: string;
  @Input() placeholder?: string = '';
  @Input() className?: string = '';
  @Input() id?: string = '';
  @Input() minDate?: Date;
  @Input() maxDate?: Date;
  @Input() disabled = false;
  @Input() isReadOnly = false;
  @Input() accessKey = '';
  @Input() aria_placeholder = 'MM-DD-YYYY';
  @Input() aria_label = 'given-name';
  @Output() calendarValueChange = new EventEmitter<any>();
  inputDate: any;

  constructor(private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  onChange = (_: any) => { };
  onTouched = () => { };

  writeValue(obj: any): void {
    this.inputDate = obj;
    this._changeDetectorRef.markForCheck();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onDateChanged(event: any) {
    this.onChange(event);
    this.calendarValueChange.emit(event);
  }

  handleBlur() {
    this.onTouched();
  }

  onBlur() {
    this.onTouched();
  }

  @HostListener('window:scroll')
  onScrollEvent() {
  }
}
