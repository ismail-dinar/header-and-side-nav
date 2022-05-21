import { Component, Input, OnInit } from '@angular/core';
import { MessageTypeEnum } from '../enum/message-type.enum';

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.css'],
})
export class NoDataComponent implements OnInit {
  @Input() public type: MessageTypeEnum;

  constructor() {}

  ngOnInit() {}
}
