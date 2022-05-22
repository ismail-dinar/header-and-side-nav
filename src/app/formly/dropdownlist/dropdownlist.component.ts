import { FormlyFieldConfig } from '@ngx-formly/core';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/kendo/form-field';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

export interface IDropDownListFieldConfig extends FormlyFieldConfig {
  formControl: FormControl;
  templateOptions: NonNullable<
    Required<FormlyFieldConfig>['templateOptions']
  > & {
    labelProp?: string;
    valueProp?: string;
  };
}

@Component({
  selector: 'formly-field-kendo-dropdownlist',
  template: `
    <kendo-dropdownlist
      [formControl]="formControl"
      [formlyAttributes]="field"
      [data]="listOptions | async"
      [textField]="to.labelProp"
      [valueField]="to.valueProp"
      [valuePrimitive]="false"
      (valueChange)="to.change && to.change(field, $event)"
    >
    </kendo-dropdownlist>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyDropDownListComponent extends FieldType<IDropDownListFieldConfig> implements OnInit{
  public listOptions: Observable<any>;


  public ngOnInit(): void {
    if (!(this.to.options instanceof Observable)) {
      this.listOptions = of(this.to.options);
      return;
    }
    this.listOptions = this.to.options;
  }
}
