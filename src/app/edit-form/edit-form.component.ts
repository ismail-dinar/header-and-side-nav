import { data } from './../mocks/data';
import { first, switchMap } from 'rxjs/operators';
import { StateService } from './../services/state.service';
import { EditService } from './../services/edit.service';
import { Column } from './../interfaces/column.interface';
import { IFormlyForm } from './../interfaces/formly-form.interface';
import { FormlyFormBuilder } from './../services/formly-form-builder.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit {
  @Input() public columns: Column[];
  @Input() public isNew: boolean;
  @Input() public model: Record<string, any>;
  @Output() public cancelRequest: EventEmitter<void> = new EventEmitter();
  public formlyForm: IFormlyForm;

  public constructor(
    private formlyFormBuilder: FormlyFormBuilder,
    private editService: EditService,
    private stateService: StateService
  ) {}

  public ngOnInit(): void {
    this.formlyForm = this.formlyFormBuilder.buildForm(this.columns);
    if (this.model) {
      this.formlyForm.model = this.model;
    }
  }

  public save(): void {
    this.stateService.currentTable$
      .pipe(
        first(),
        switchMap((table) =>
          this.isNew
            ? this.editService.add(this.formlyForm.model, table)
            : this.editService.add(this.formlyForm.model, table)
        )
      )
      .subscribe((result) => {
        console.log(result);
      });
  }

  public cancel(): void {
    this.cancelRequest.emit();
  }
}
