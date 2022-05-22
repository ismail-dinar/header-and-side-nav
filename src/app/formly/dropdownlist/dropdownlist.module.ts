import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormlySelectModule as FormlyCoreSelectModule } from '@ngx-formly/core/select';

import { FormlyFormFieldModule } from '@ngx-formly/kendo/form-field';
import { FormlyDropDownListComponent } from './dropdownlist.component';

@NgModule({
  declarations: [FormlyDropDownListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropDownsModule,

    FormlyFormFieldModule,
    FormlyCoreSelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'dropdownlist',
          component: FormlyDropDownListComponent,
          wrappers: ['form-field'],
        },
        { name: 'enum', extends: 'dropdownlist' },
      ],
    }),
  ],
})
export class FormlyDropDownListModule {}
