import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { startCase } from 'lodash';
import { Column } from '../interfaces/column.interface';
import { IFormlyForm } from '../interfaces/formly-form.interface';
import { map, Observable, tap } from 'rxjs';

export const typeToFieldConfigMap: Record<
  string,
  Partial<FormlyFieldConfig>
> = {
  text: {
    type: 'input',
    templateOptions: {
      type: 'text',
    },
  },
  textarea: {
    type: 'textarea',
    templateOptions: {},
  },
  number: {
    type: 'input',
    templateOptions: {
      type: 'number',
    },
  },
  date: {
    type: 'input',
    templateOptions: {
      type: 'date',
    },
  },
  lookup: {
    type: 'dropdownlist',
    templateOptions: {
      labelProp: 'displayName',
      valueProp: 'id',
    },
  },
};

@Injectable({
  providedIn: 'root',
})
export class FormlyFormBuilder {
  public constructor(private dataService: DataService) {}

  public buildForm(columns: Column[]): IFormlyForm {
    const fields: FormlyFieldConfig[] = columns.map((column) => ({
      key: column.name,
      type: typeToFieldConfigMap[column.type].type,
      templateOptions: {
        label: startCase(column.name),
        ...typeToFieldConfigMap[column.type].templateOptions,
        required: column.required,
        ...(column.type === 'lookup'
          ? {
              options: this.dataService.getLookupFor(column.name).pipe(tap(console.log)),
            }
          : {}),
      },
    }));

    const model: Record<string, any> = {};
    const form: FormGroup = new FormGroup({});

    return {
      fields,
      model,
      form,
    };
  }
}
