import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

export interface IFormlyForm  {
  fields: FormlyFieldConfig[];
  model: Record<string, any>;
  form: FormGroup;
}
