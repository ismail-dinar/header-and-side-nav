import { Component, Input } from '@angular/core';
import { NoDataTypeEnum } from '../enum/no-data-type.enum';

export const messages: Record<NoDataTypeEnum, string> = {
  [NoDataTypeEnum.Error]: 'An error has occured',
  [NoDataTypeEnum.NoData]: 'No Data',
};

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss'],
})
export class NoDataComponent {
  @Input() public type: NoDataTypeEnum;
  @Input() public message: string;

  public getMessage(): string {
    if (this.message) {
      return this.message;
    }

    return messages[this.type];
  }
}
